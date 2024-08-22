import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CallsTableComponent } from '../calls-table/calls-table.component';

export interface User {
  id: number;
  name: string;
  job: string;
  dateOfBirth: string;
  showCallsTable: boolean;  // To toggle the display of the calls table
}

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule,CallsTableComponent],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  users: User[] = [
    { id: 1, name: 'John Doe', job: 'Developer', dateOfBirth: '1990-01-01', showCallsTable: false },
    { id: 2, name: 'Jane Smith', job: 'Designer', dateOfBirth: '1985-05-15', showCallsTable: false },
    // Add more users as needed
  ];
  
  toggleCallsTable(user: User): void {
    user.showCallsTable = !user.showCallsTable;
  }
}
