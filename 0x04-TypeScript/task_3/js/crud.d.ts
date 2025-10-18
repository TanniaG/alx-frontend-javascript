// Task 8.2: Ambient declarations for crud.js
import { RowID, RowElement } from './interface';

declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;

