import { textDiff } from './text-diff';
// npm test -- --watch=false --include='**/text-diff.test.ts'
// ^^Denna rad körs i terminalen från mistral/frontend^^

describe('textDiff', () => {
  let differ: textDiff;

  beforeEach(() => {
    differ = new textDiff();
  });

  describe('getDiff - INSERT', () => {

    describe('INSERT - single char', () => {

      it('should detect a single-char insertion at the end', () => {
        const prevText = 'hello';
        const newText = 'helloo';
        const idx = 6; // måste hårdkoda indexet av 'cursorn' efter ändring

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('INSERT');
        expect(diff.idx).toBe(5);
        expect(diff.value).toBe('o');
      });

      it('should detect a single-char insertion in the middle', () => {
        const prevText = 'helo';
        const newText = 'hello';
        const idx = 3;

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('INSERT');
        expect(diff.idx).toBe(2);
        expect(diff.value).toBe('l');
      });

      it('should detect a single-char insertion at the beginning', () => {
        const prevText = 'ello';
        const newText = 'hello';
        const idx = 1;

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('INSERT');
        expect(diff.idx).toBe(0);
        expect(diff.value).toBe('h');
      });
    });

    describe('INSERT - multiple char', () => {

      it('should detect multi-char insertion at the end', () => {

        const prevText = 'hello';
        const newText = 'hello world';
        const idx = 11;

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('INSERT');
        expect(diff.idx).toBe(5);
        expect(diff.value).toBe(' world');
      });

      it('should detect multi-char insertion in the middle', () => {

        const prevText = 'hello';
        const newText = 'hel middle lo';
        const idx = 11;

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('INSERT');
        expect(diff.idx).toBe(3);
        expect(diff.value).toBe(' middle ');
      });

      it('should detect multi-char insertion at the beginning', () => {

        const prevText = 'hello';
        const newText = 'I say hello';
        const idx = 6;

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('INSERT');
        expect(diff.idx).toBe(0);
        expect(diff.value).toBe('I say ');
      });
    });
  });
    
  describe('getDiff - DELETE', () => {

    describe('DELETE - single char', () => {

      it('should detect a single-char delete at the end', () => {
        const prevText = 'hello';
        const newText = 'hell';
        const idx = 4; 

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('DELETE');
        expect(diff.idx).toBe(4);
        expect(diff.length).toBe(1);
      });

      it('should detect a single-char delete in the middle', () => {
        const prevText = 'hello';
        const newText = 'helo';
        const idx = 2; 

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('DELETE');
        expect(diff.idx).toBe(2);
        expect(diff.length).toBe(1);
      });

      it('should detect a single-char delete at the beginning', () => {
        const prevText = 'hello';
        const newText = 'ello';
        const idx = 0; 

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('DELETE');
        expect(diff.idx).toBe(0);
        expect(diff.length).toBe(1);
      });

      it('should detect a single-char delete on final character', () => {
        const prevText = 'h';
        const newText = '';
        const idx = 0; 

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('DELETE');
        expect(diff.idx).toBe(0);
        expect(diff.length).toBe(1);
      });
    });

    describe('DELETE - multiple char', () => {

      it('should detect a multi-char delete at the end', () => {
        const prevText = 'hello';
        const newText = 'he';
        const idx = 2; 

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('DELETE');
        expect(diff.idx).toBe(2);
        expect(diff.length).toBe(3);
      });

      it('should detect a multi-char delete in the middle', () => {
        const prevText = 'hello';
        const newText = 'ho';
        const idx = 1; 

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('DELETE');
        expect(diff.idx).toBe(1);
        expect(diff.length).toBe(3);
      });

      it('should detect a multi-char delete at the beginning', () => {
        const prevText = 'hello';
        const newText = 'llo';
        const idx = 0; 

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('DELETE');
        expect(diff.idx).toBe(0);
        expect(diff.length).toBe(2);
      });

      it('should detect a multi-char delete on entire text', () => {
        const prevText = 'hello';
        const newText = '';
        const idx = 0; 

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('DELETE');
        expect(diff.idx).toBe(0);
        expect(diff.length).toBe(prevText.length);
      });
    });
  });

  describe('getDiff - REPLACEMENT', () => {

    describe('REPLACE - single char', () => {

      it('should detect a single-char replace at the end', () => {
        const prevText = 'hello';
        const newText = 'hellA';
        const idx = 5; 

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('REPLACEMENT');
        expect(diff.idx).toBe(4);
        expect(diff.value).toBe('A');
        expect(diff.length).toBe(1);
      });

      it('should detect a single-char replace in the middle', () => {
        const prevText = 'hello';
        const newText = 'heWlo';
        const idx = 3;

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('REPLACEMENT');
        expect(diff.idx).toBe(2);
        expect(diff.value).toBe('W');
        expect(diff.length).toBe(1);
      });

      it('should detect a single-char replace at the beginning', () => {
        const prevText = 'hello';
        const newText = 'Cello';
        const idx = 1;

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('REPLACEMENT');
        expect(diff.idx).toBe(0);
        expect(diff.value).toBe('C');
        expect(diff.length).toBe(1);
      });

      it('should detect a single-char replace on final char', () => {
        const prevText = 'h';
        const newText = 'a';
        const idx = 1;

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('REPLACEMENT');
        expect(diff.idx).toBe(0);
        expect(diff.value).toBe('a');
        expect(diff.length).toBe(1);
      });

    });

    describe('REPLACE - multiple char', () => {

      it('should detect a multi-char replace at the end', () => {
        const prevText = 'hello';
        const newText = 'helAB';
        const idx = 5;

        const diff = differ.getDiff(prevText, newText, idx);

        expect(diff.operation).toBe('REPLACEMENT');
        expect(diff.idx).toBe(3);
        expect(diff.value).toBe('AB');
        expect(diff.length).toBe(2);
      });
      
      it('should detect a multi-char replace in the middle', () => {
        const prevText = 'hello';
        const newText = 'hABCo';
        const idx = 4;
        
        const diff = differ.getDiff(prevText, newText, idx);
        
        expect(diff.operation).toBe('REPLACEMENT');
        expect(diff.idx).toBe(1);
        expect(diff.value).toBe('ABC');
        expect(diff.length).toBe(3);
      });

      it('should detect a multi-char replace at the begining', () => {
        const prevText = 'hello';
        const newText = 'ABllo';
        const idx = 2;
        
        const diff = differ.getDiff(prevText, newText, idx);
        
        expect(diff.operation).toBe('REPLACEMENT');
        expect(diff.idx).toBe(0);
        expect(diff.value).toBe('AB');
        expect(diff.length).toBe(2);
      });

      it('should detect a multi-char replace on entire text', () => {
        const prevText = 'hello';
        const newText = 'ABCDE';
        const idx = 5;
        
        const diff = differ.getDiff(prevText, newText, idx);
        
        expect(diff.operation).toBe('REPLACEMENT');
        expect(diff.idx).toBe(0);
        expect(diff.value).toBe('ABCDE');
        expect(diff.length).toBe(5);
      });
    });

    describe('edge cases', () => {
      it('should pivot to insert', () => {
        const prevText = 'hello';
        const newText = 'hehello';
        const idx = 6; // index är 6 eftersom vi böt ut "hell" mot "hehell"
        
        const diff = differ.getDiff(prevText, newText, idx);
        
        expect(diff.operation).toBe('INSERT');
        expect(diff.idx).toBe(0);
        expect(diff.value).toBe('he');
      });

      it('should pivot to delete', () => {
        const prevText = 'hehello';
        const newText = 'hello';
        const idx = 4; // index är 4 eftersom vi böt ut "hehell" mot "hell"
        
        const diff = differ.getDiff(prevText, newText, idx);
        
        expect(diff.operation).toBe('DELETE');
        expect(diff.idx).toBe(0);
        expect(diff.length).toBe(2);
      });
    })
  }); 
});
