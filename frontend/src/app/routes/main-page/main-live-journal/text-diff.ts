/**
 * Represents a text difference operation between two strings.
 * 
 * @interface Diff
 * @property {('INSERT'|'DELETE'|'REPLACEMENT')} operation - The type of operation performed
 * @property {number} idx - The position of the change
 * @property {string} value - The text content inserted (used for INSERT operations)
 * @property {number} length - The length of text deleted (used for DELETE operations)
 * 
 * OBS: REPLACEMENT operations are represented as a DELETE followed by an INSERT
 */
export interface Diff {
    operation: 'INSERT' | 'DELETE' | 'REPLACEMENT';
    idx: number; 
    value: string; 
    length: number
}

/**
 * Calculates the differences between two text strings and represents them as a 'Diff' (see above).
 * 
 * This class analyzes changes between a previous and new text version to determine
 * whether the operation is an insertion, deletion, or replacement, and extracts
 * the relevant position and content information for that operation.
 * 
 * @class textDiff
 */
export class textDiff {
  /**
   * Main function for calculating diffs
   * 
   * @param {string} prevText - The text prior to the change
   * @param {string} newText - The text after the change
   * @param {number} idx - The cursor position after the change
   * @returns {Diff} The resulting diff
   */
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
        diff.length = length; 
        break;
      case 'INSERT':
        diff.idx = idx + length;
        diff.value = newText.substring(idx + length, idx); 
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

  /**
   * Verifies that the text before and after a modification segment is identical
   * in both strings. This determines if a change is a simple INSERT or DELETE
   * rather than a REPLACEMENT.
   * 
   * @private
   * @param {string} prevText - The text prior to the change
   * @param {string} newText - The text after the change
   * @param {number} idx - The cursor position after the change
   * @param {number} length - The length difference (positive for deletion, negative for insertion)
   * @returns {boolean} True if surrounding text matches, false otherwise
   */
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

  /**
   * Finds the index of the first character that differs between the text previous text and the new text
   * 
   * @private
   * @param {string} prevText - The text prior to the change
   * @param {string} newText - The text after the change
   * @returns {number} The index of the first differing character
   */
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

  /**
   * Finds the index of the first character after the modified segment that differs between the previous 
   * text and the new text. In the case that no difference is found before the 'end' of either string, 
   * an OutOfBounds message is returned based on which text that triggered the OutOfBound response. 
   * 
   * @private
   * @param {string} prevText - The text prior to the change
   * @param {string} newText - The text after the change
   * @returns {(number|'prevOutOfBounds'|'newOutOfBounds')} The index of the last differing character if found,
   *          'prevOutOfBounds' if prevText is a substring of newText (de-facto insert),
   *          or 'newOutOfBounds' if newText is a substring of prevText (de-facto delete)
   */
  findLastDiff(prevText: string, newText: string): number | 'prevOutOfBounds' | 'newOutOfBounds' {
    let idx = 1;
    while(true) {
      if (idx > prevText.length) {
        // in this case, the operation is a de-facto insert 
        return 'prevOutOfBounds'
      } else if (idx > newText.length) {
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