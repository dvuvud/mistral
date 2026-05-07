import { DeleteOperation, WsJournalWriteOperation } from "../../../core/websocket/websocket.service";

export class operationalTransformation {
  transformClient(inOp: WsJournalWriteOperation, flightOp: WsJournalWriteOperation): WsJournalWriteOperation {
    // we transform based on type of incoming operation
    switch (inOp.type) {
      case 'INSERT':
        return this.transformInsert(inOp, flightOp);
      case 'DELETE':
        return this.transformDelete(inOp, flightOp);
    }
  }

  transformInsert(inOp: WsJournalWriteOperation, flightOp: WsJournalWriteOperation): WsJournalWriteOperation {
    const resOp = inOp;
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

  transformDelete(inOp: WsJournalWriteOperation, flightOp: WsJournalWriteOperation): WsJournalWriteOperation {
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
