import { WsJournalWriteOperation } from "../../../core/websocket/websocket.service";

export class operationalTransformation {
  transformClient(inOp: WsJournalWriteOperation, flightOp: WsJournalWriteOperation): WsJournalWriteOperation {
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
        if (flightOp.position < inOp.position) {
          resOp.position++;
        }
        break;
      case 'DELETE':
        if (flightOp.position < inOp.position) {
          resOp.position--;
        }
        break;
    }
    return resOp;
  }

  transformDelete(inOp: WsJournalWriteOperation, flightOp: WsJournalWriteOperation): WsJournalWriteOperation {
    const resOp = inOp;
    switch (flightOp.type) {
      case 'INSERT':
        if (flightOp.position < inOp.position) {
          resOp.position++;
        }
        break;
      case 'DELETE':
        if (flightOp.position < inOp.position) {
          resOp.position--;
        }
        break;
    }
    return resOp;
  }
}
