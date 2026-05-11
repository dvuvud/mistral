import { DeleteOperation, InsertOperation } from '../../../core/websocket/websocket.service';
import { operationalTransformation } from './operational-transformation';
// npm test -- --watch=false --include='**/main-live-journal/*.test.ts'
// ^^Denna rad körs i terminalen från mistral/frontend^^

describe('Operational transformation', () => {
  let operationalTransformer: operationalTransformation;

  beforeEach(() => {
    operationalTransformer = new operationalTransformation();
  });

  describe('INSERT - INSERT', () => {

    it('should shift right, single char - single char', () => {
      const inOp: InsertOperation = {type: 'INSERT', position: 2, text: 'A'};
      const flightOp: InsertOperation = {type: 'INSERT', position: 2, text: 'B'};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as InsertOperation;

      expect(resOp.type).toBe('INSERT');
      expect(resOp.position).toBe(2 + flightOp.text.length);
      expect(resOp.text).toBe('A');
    });

    it('should shift right, single char - multi char', () => {
      const inOp: InsertOperation = {type: 'INSERT', position: 2, text: 'A'};
      const flightOp: InsertOperation = {type: 'INSERT', position: 2, text: 'BCDE'};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as InsertOperation;

      expect(resOp.type).toBe('INSERT');
      expect(resOp.position).toBe(2 + flightOp.text.length);
      expect(resOp.text).toBe('A');
    });

    it('should shift right, multi char - single char', () => {
      const inOp: InsertOperation = {type: 'INSERT', position: 2, text: 'ABC'};
      const flightOp: InsertOperation = {type: 'INSERT', position: 2, text: 'D'};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as InsertOperation;

      expect(resOp.type).toBe('INSERT');
      expect(resOp.position).toBe(2 + flightOp.text.length);
      expect(resOp.text).toBe('ABC');
    });

    it('should shift right, multi char - multi char', () => {
      const inOp: InsertOperation = {type: 'INSERT', position: 2, text: 'ABC'};
      const flightOp: InsertOperation = {type: 'INSERT', position: 2, text: 'DEF'};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as InsertOperation;

      expect(resOp.type).toBe('INSERT');
      expect(resOp.position).toBe(2 + flightOp.text.length);
      expect(resOp.text).toBe('ABC');
    });

    it('should not shift', () => {
      const inOp: InsertOperation = {type: 'INSERT', position: 5, text: 'ABC'};
      const flightOp: InsertOperation = {type: 'INSERT', position: 6, text: 'ABC'};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as InsertOperation;

      expect(resOp.type).toBe('INSERT');
      expect(resOp.position).toBe(5);
      expect(resOp.text.length).toBe(3);
    });
  }); 

  describe('INSERT - DELETE', () => {

    it('should shift right, single char - single char', () => {
      const inOp: InsertOperation = {type: 'INSERT', position: 2, text: 'A'};
      const flightOp: DeleteOperation = {type: 'DELETE', position: 1, length: 1};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as InsertOperation;

      expect(resOp.type).toBe('INSERT');
      expect(resOp.position).toBe(2 - flightOp.length);
      expect(resOp.text).toBe('A');
    });

    it('should shift right, single char - multi char', () => {
      const inOp: InsertOperation = {type: 'INSERT', position: 5, text: 'A'};
      const flightOp: DeleteOperation = {type: 'DELETE', position: 1, length: 3};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as InsertOperation;

      expect(resOp.type).toBe('INSERT');
      expect(resOp.position).toBe(5 - flightOp.length);
      expect(resOp.text).toBe('A');
    });

    it('should shift right, multi char - single char', () => {
      const inOp: InsertOperation = {type: 'INSERT', position: 5, text: 'ABC'};
      const flightOp: DeleteOperation = {type: 'DELETE', position: 1, length: 1};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as InsertOperation;

      expect(resOp.type).toBe('INSERT');
      expect(resOp.position).toBe(5 - flightOp.length);
      expect(resOp.text).toBe('ABC');
    });

    it('should shift right, multi char - multi char', () => {
      const inOp: InsertOperation = {type: 'INSERT', position: 5, text: 'ABC'};
      const flightOp: DeleteOperation = {type: 'DELETE', position: 1, length: 3};
 
      const resOp = operationalTransformer.transformClient(inOp, flightOp) as InsertOperation;

      expect(resOp.type).toBe('INSERT');
      expect(resOp.position).toBe(5 - flightOp.length);
      expect(resOp.text).toBe('ABC');
    });

    it('should not shift, delete after insert position', () => {
      const inOp: InsertOperation = {type: 'INSERT', position: 5, text: 'A'};
      const flightOp: DeleteOperation = {type: 'DELETE', position: 5, length: 1};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as InsertOperation;

      expect(resOp.type).toBe('INSERT');
      expect(resOp.position).toBe(5);
      expect(resOp.text).toBe('A');
    });
  });

  describe('DELETE - INSERT', () => {

    it('should shift left, single char - single char', () => {
      const inOp: DeleteOperation = {type: 'DELETE', position: 2, length: 1};
      const flightOp: InsertOperation = {type: 'INSERT', position: 1, text: 'A'};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as DeleteOperation;

      expect(resOp.type).toBe('DELETE');
      expect(resOp.position).toBe(2 + flightOp.text.length);
      expect(resOp.length).toBe(1);
    });

    it('should shift left, single char - multi char', () => {
      const inOp: DeleteOperation = {type: 'DELETE', position: 5, length: 1};
      const flightOp: InsertOperation = {type: 'INSERT', position: 1, text: 'ABC'};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as DeleteOperation;

      expect(resOp.type).toBe('DELETE');
      expect(resOp.position).toBe(5 + flightOp.text.length);
      expect(resOp.length).toBe(1);
    });

    it('should shift left, multi char - single char', () => {
      const inOp: DeleteOperation = {type: 'DELETE', position: 5, length: 3};
      const flightOp: InsertOperation = {type: 'INSERT', position: 1, text: 'A'};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as DeleteOperation;

      expect(resOp.type).toBe('DELETE');
      expect(resOp.position).toBe(5 + flightOp.text.length);
      expect(resOp.length).toBe(3);
    });

    it('should shift left, multi char - multi char', () => {
      const inOp: DeleteOperation = {type: 'DELETE', position: 5, length: 3};
      const flightOp: InsertOperation = {type: 'INSERT', position: 1, text: 'ABC'};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as DeleteOperation;

      expect(resOp.type).toBe('DELETE');
      expect(resOp.position).toBe(5 + flightOp.text.length);
      expect(resOp.length).toBe(3);
    });

    it('should not shift left', () => {
      const inOp: DeleteOperation = {type: 'DELETE', position: 2, length: 3};
      const flightOp: InsertOperation = {type: 'INSERT', position: 8, text: 'ABC'};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as DeleteOperation;

      expect(resOp.type).toBe('DELETE');
      expect(resOp.position).toBe(2);
      expect(resOp.length).toBe(3);
    });

    it('flightOp within inOp range', () => {
      const inOp: DeleteOperation = {type: 'DELETE', position: 3, length: 3};
      const flightOp: InsertOperation = {type: 'INSERT', position: 4, text: 'ABC'};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as DeleteOperation;

      expect(resOp.type).toBe('DELETE');
      expect(resOp.position).toBe(3);
      expect(resOp.length).toBe(3 + flightOp.text.length);
    });
  });

  describe('DELETE - DELETE', () => {

    it('should shift right, single char - single char', () => {
      const inOp: DeleteOperation = {type: 'DELETE', position: 2, length: 1};
      const flightOp: DeleteOperation = {type: 'DELETE', position: 1, length: 1};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as DeleteOperation;

      expect(resOp.type).toBe('DELETE');
      expect(resOp.position).toBe(2 - flightOp.length);
      expect(resOp.length).toBe(1);
    });

    it('should shift right, single char - multi char', () => {
      const inOp: DeleteOperation = {type: 'DELETE', position: 5, length: 1};
      const flightOp: DeleteOperation = {type: 'DELETE', position: 1, length: 3};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as DeleteOperation;

      expect(resOp.type).toBe('DELETE');
      expect(resOp.position).toBe(5 - flightOp.length);
      expect(resOp.length).toBe(1);
    });

    it('should shift right, multi char - single char', () => {
      const inOp: DeleteOperation = {type: 'DELETE', position: 5, length: 3};
      const flightOp: DeleteOperation = {type: 'DELETE', position: 1, length: 1};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as DeleteOperation;

      expect(resOp.type).toBe('DELETE');
      expect(resOp.position).toBe(5 - flightOp.length);
      expect(resOp.length).toBe(3);
    });

    it('should shift right, multi char - multi char', () => {
      const inOp: DeleteOperation = {type: 'DELETE', position: 5, length: 3};
      const flightOp: DeleteOperation = {type: 'DELETE', position: 1, length: 3};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as DeleteOperation;

      expect(resOp.type).toBe('DELETE');
      expect(resOp.position).toBe(5 - flightOp.length);
      expect(resOp.length).toBe(3);
    });

    it('flightOp within inOp range', () => {
      const inOp: DeleteOperation = {type: 'DELETE', position: 3, length: 3};
      const flightOp: DeleteOperation = {type: 'DELETE', position: 4, length: 3};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as DeleteOperation;

      expect(resOp.type).toBe('DELETE');
      expect(resOp.position).toBe(3);
      expect(resOp.length).toBe(1);
    });

    it('should not shift (no-op), delete after incoming delete range', () => {
      const inOp: DeleteOperation = {type: 'DELETE', position: 3, length: 2};
      const flightOp: DeleteOperation = {type: 'DELETE', position: 6, length: 1};

      const resOp = operationalTransformer.transformClient(inOp, flightOp) as DeleteOperation;

      expect(resOp.type).toBe('DELETE');
      expect(resOp.position).toBe(3);
      expect(resOp.length).toBe(2);
    });
  });
});
