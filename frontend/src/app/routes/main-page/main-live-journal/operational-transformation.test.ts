import { InsertOperation } from '../../../core/websocket/websocket.service';
import { operationalTransformation } from './operational-transformation';
import { textDiff } from './text-diff';
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

      const resOp = operationalTransformer.transformClient(inOp, flightOp);

      expect(resOp.type).toBe('INSERT');
      expect(resOp.position).toBe(2 + flightOp.text.length);
      if (resOp.type == 'INSERT') {
        expect(resOp.text).toBe('A');
      }
    });

    it('should shift right, single char - multi char', () => {
      const inOp: InsertOperation = {type: 'INSERT', position: 2, text: 'A'};
      const flightOp: InsertOperation = {type: 'INSERT', position: 2, text: 'BCDE'};

      const resOp = operationalTransformer.transformClient(inOp, flightOp);

      expect(resOp.type).toBe('INSERT');
      expect(resOp.position).toBe(2 + flightOp.text.length);
      if (resOp.type == 'INSERT') {
        expect(resOp.text).toBe('A');
      }
    });

    it('should shift right, multi char - single char', () => {
      const inOp: InsertOperation = {type: 'INSERT', position: 2, text: 'ABC'};
      const flightOp: InsertOperation = {type: 'INSERT', position: 2, text: 'D'};

      const resOp = operationalTransformer.transformClient(inOp, flightOp);

      expect(resOp.type).toBe('INSERT');
      expect(resOp.position).toBe(2 + flightOp.text.length);
      if (resOp.type == 'INSERT') {
        expect(resOp.text).toBe('ABC');
      }
    });

    it('should shift right, multi char - multi char', () => {
      const inOp: InsertOperation = {type: 'INSERT', position: 2, text: 'ABC'};
      const flightOp: InsertOperation = {type: 'INSERT', position: 2, text: 'DEF'};

      const resOp = operationalTransformer.transformClient(inOp, flightOp);

      expect(resOp.type).toBe('INSERT');
      expect(resOp.position).toBe(2 + flightOp.text.length);
      if (resOp.type == 'INSERT') {
        expect(resOp.text).toBe('ABC');
      }
    });
  }); 
});
