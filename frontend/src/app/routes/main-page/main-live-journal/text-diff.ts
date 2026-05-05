export interface Diff {
    operation: 'INSERT' | 'DELETE';
    idx: number;
    value: string;
}

export class textDiff {
  getDiff(prevText: string, newText: string, idx: number): Diff {
    const length = prevText.length - newText.length
    const operation = length < 0 ? 'INSERT' : 'DELETE';
    const diff: Diff = {operation: operation, idx: idx, value: ''}
    switch (operation) {
      case 'DELETE':
        diff.value = length.toString(); // lite ineffektivt att förvandla fram och tillbaka men blir smidigt att koda
        break;
      case 'INSERT':
        diff.value = newText.substring(idx + length, idx); // blir minus eftersom att insert ger negativ "length"
        break;
    }
    return diff;
  }
}