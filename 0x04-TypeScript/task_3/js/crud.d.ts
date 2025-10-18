// Task 8.2: Ambient declarations for crud.js
import { RowID, RowElement } from './interface';

declare module './crud' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}

