import { DeleteOperation, InsertOperation, WsJournalWriteOperation } from "../../../core/websocket/websocket.service";

/**
 * Implements operational transformation algorithms for collaborative editing when recieving opreations
 * from the server.
 * 
 * @class operationalTransformation
 */
export class operationalTransformation {

  /**
   * Transforms an incoming operation against an in-flight operation (an operation in transit).
   * 
   * Resolves conflicts between an incoming operation and a flight operation by transforming
   * the incoming operation to account for changes made by the in-flight operation. The transformation
   * ensures both operations can be applied to the document while maintaining consistency.
   * 
   * @param {WsJournalWriteOperation} inOp - The incoming operation to transform
   * @param {WsJournalWriteOperation} flightOp - The in-flight operation (in-transit operation) to transform against
   * @returns {WsJournalWriteOperation} The transformed incoming operation
   */
  transformClient(inOp: WsJournalWriteOperation, flightOp: WsJournalWriteOperation): WsJournalWriteOperation {
    // we transform based on type of incoming operation
    switch (inOp.type) {
      case 'INSERT':
        return this.transformInsert(inOp, flightOp);
      case 'DELETE':
        return this.transformDelete(inOp, flightOp);
    }
  }

  /**
   * Transforms an insert operation against an in-flight operation.
   * 
   * Adjusts the position and/or length of an incoming insert operation based on how
   * the flight operation affects the document. Handles cases where the in-flight operation
   * is an insert or delete that impacts the target position of the incoming insert.
   * 
   * @private
   * @param {WsJournalWriteOperation} inOp - The incoming insert operation to transform
   * @param {WsJournalWriteOperation} flightOp - The in-flight operation to transform against
   * @returns {InsertOperation} The transformed insert operation with adjusted position
   */
  transformInsert(inOp: WsJournalWriteOperation, flightOp: WsJournalWriteOperation): InsertOperation {
    const resOp = inOp as InsertOperation;
    switch (flightOp.type) {
      case 'INSERT':
        if (flightOp.position <= inOp.position) {
          // if flightOp is before or at incoming insert, shift incoming to the right    
          resOp.position += flightOp.text.length;
        }
        break;
      case 'DELETE':
        if (flightOp.position < inOp.position) {
          // if flightOp is before incoming delete 
          Math.max(flightOp.position, resOp.position -= flightOp.length);
        }
        break;
    }
    return resOp;
  }

  /**
   * Transforms a delete operation against a flight operation.
   * 
   * Adjusts the position and/or length of an incoming delete operation based on how
   * the flight operation affects the document. Handles cases where the flight operation
   * is an insert or delete that overlaps or precedes the delete range of the incoming operation.
   * 
   * @private
   * @param {WsJournalWriteOperation} inOp - The incoming delete operation to transform
   * @param {WsJournalWriteOperation} flightOp - The in-flight operation to transform against
   * @returns {DeleteOperation} The transformed delete operation with adjusted position and/or length
   */
  transformDelete(inOp: WsJournalWriteOperation, flightOp: WsJournalWriteOperation): DeleteOperation {
    const resOp = inOp as DeleteOperation;
    switch (flightOp.type) {
      case 'INSERT':
        if (flightOp.position <= resOp.position) {
          // flightOp is before or at the start of the incoming delete operation, shift incoming right
          resOp.position += flightOp.text.length;
        } else if (flightOp.position < resOp.position + resOp.length) {
          // flightOp starts after the start of the incoming delete operation but after it's end,
          // extend the range of the incoming operation
          resOp.length += flightOp.text.length;
        }
        break;
      case 'DELETE':
        if (flightOp.position + flightOp.length <= resOp.position) {
          // the entirety of the flightOp delete is prior to the starting position of the incoming operation,
          // shift the incoming operation left, but no further than the start of the flightOp
          resOp.position -= flightOp.length;
        } else if (flightOp.position <= resOp.position) {
          // there is crossover between flightOp and resOp, adjustment needed
          const crossOverLength = flightOp.position + flightOp.length - resOp.position;
          resOp.position = Math.max(flightOp.position, resOp.position -= flightOp.length);
          resOp.length -= crossOverLength;
        }
        break;
    }
    return resOp;
  }
}