export interface Diff {
    operation: 'INSERT' | 'DELETE' | 'REPLACEMENT';
    idx: number; // position av cursor efter förändring
    value: string; // används för insert delen
    length: number // används för delete delen
}

export class textDiff {
  getDiff(prevText: string, newText: string, idx: number): Diff {
    const length = prevText.length - newText.length;

    const operation = this.surroundingMatch(prevText, newText, idx, length) 
      ? length > 0 
        ? 'DELETE' 
        : 'INSERT' 
      : 'REPLACEMENT'

    const diff: Diff = {operation: operation, idx: idx, value: '', length: 0}

    switch (operation) {
      case 'DELETE':
        diff.length = length; // lite ineffektivt att förvandla fram och tillbaka men blir smidigt att koda
        break;
      case 'INSERT':
        diff.idx = idx + length;
        diff.value = newText.substring(idx + length, idx); // blir minus eftersom att insert ger negativ "length"
        break;
      case 'REPLACEMENT': {  
        const firstDiff = this.findFirstDiff(prevText, newText);
        const lastDiff = this.findLastDiff(prevText, newText);
        switch (lastDiff) {
          case 'prevOutOfBounds':
            // pivot if equivalent to insert
            diff.idx = 0;
            diff.value = newText.substring(0, 0 - length);
            diff.operation = 'INSERT';
            break;
          case 'newOutOfBounds':
            // pivot if equivalent to delete
            diff.idx = 0;
            diff.length = length;
            diff.operation = 'DELETE';
            break;
          default:
            diff.value = newText.substring(firstDiff, lastDiff); 
            diff.length = length + diff.value.length;
            diff.idx = firstDiff;
            break;
        }
      }
    }
    return diff;
  }

  surroundingMatch(prevText: string, newText: string, idx: number, length: number): boolean {
    switch (length < 0) {
      case true:
        return (prevText.substring(0, idx + length) === newText.substring(0, idx + length)) 
        && (prevText.substring(idx + length) === newText.substring(idx))
      case false:
        return (prevText.substring(0, idx) === newText.substring(0, idx)) 
        && (prevText.substring(idx + length) === newText.substring(idx))
    }
  }

  findFirstDiff(prevText: string, newText: string): number {
    let idx = 0;
    while(true) {
      if (prevText.charAt(idx) === newText.charAt(idx)) {
        idx++;
      } else {
        return idx;
      }
    }
  }

  findLastDiff(prevText: string, newText: string): number | 'prevOutOfBounds' | 'newOutOfBounds' {
    let idx = 1;
    while(true) {
      if (idx >= prevText.length) {
        // in this case, the operation is a de-facto insert 
        return 'prevOutOfBounds'
      } else if (idx >= newText.length) {
        // in this case, the operation is a de-facto delete
        return 'newOutOfBounds'
      } else if (prevText.charAt(prevText.length - idx) === newText.charAt(newText.length - idx)) {
        idx++;
      } else {
        return newText.length - idx + 1;
      }
    }
  }
}