import { RowID, RowElement } from './interface';

declare export function insertRow(row: RowElement): number;
declare export function deleteRow(rowId: RowID): void;
declare export function updateRow(rowId: RowID, row: RowElement): RowID;