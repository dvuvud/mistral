import { operation } from "../../../core/websocket/websocket.service";

export class operationalTransformation {
  transformClient(inOp: operation, flightOp: operation): operation {
    switch (inOp.type) {   
      case 'INSERT':
        return this.transformInsert(inOp, flightOp);
      case 'DELETE':
        return this.transformDelete(inOp, flightOp);
    }
  }

  transformInsert(inOp: operation, flightOp: operation): operation {
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

  transformDelete(inOp: operation, flightOp: operation): operation {
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