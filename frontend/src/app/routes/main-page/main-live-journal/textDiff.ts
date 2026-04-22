import { operation } from "../../../core/websocket/websocket.service";

export type Diff = {
    operation: 'INSERT' | 'DELETE';
    idx: number;
    value: string;
}

export class textDiff {
    getDiff(prevText: string, newText: string): Diff {
        const operation = prevText.length < newText.length ? 'INSERT' : 'DELETE';
        let diff: Diff = {operation: operation, idx: 0, value: ''}
        switch (operation) {
            case 'DELETE':
                diff.idx = this.getDiffIdx(prevText, newText);
                diff.value = prevText.charAt(diff.idx);
                break;
            case 'INSERT':
                diff.idx = this.getDiffIdx(prevText, newText);
                diff.value = newText.charAt(diff.idx);
                break;
        }
        return diff;
    }

    getDiffIdx(prevText: string, newText: string): number {
        let idx: number = 0;
        while (prevText.charAt(idx) == newText.charAt(idx)) {
            idx++;
            if (idx > Math.max(prevText.length, newText.length)) break;
        }
        return idx;
    }
}