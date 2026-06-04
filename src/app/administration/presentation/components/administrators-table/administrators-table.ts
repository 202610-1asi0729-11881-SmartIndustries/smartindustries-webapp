import { Component } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-administrators-table',
  imports: [
    MatTable,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    TranslatePipe
  ],
  templateUrl: './administrators-table.html',
  styleUrl: './administrators-table.css',
})
export class AdministratorsTable {
  protected administrators: {id: number, name: string, role: string, invitationStatus: string}[] = [
    {id: 1, name: "Imanol Limache", role: "Operator", invitationStatus: "Pending"},
    {id: 1, name: "Imanol Limache", role: "Operator", invitationStatus: "Accepted"},
    {id: 1, name: "Imanol Limache", role: "Operator", invitationStatus: "Pending"},
    {id: 1, name: "Imanol Limache", role: "Operator", invitationStatus: "Accepted"},
    {id: 1, name: "Imanol Limache", role: "Operator", invitationStatus: "Pending"},
  ];
  protected administratorsColumns: string[] = ["id", "name", "role", "invitationStatus"]
}
