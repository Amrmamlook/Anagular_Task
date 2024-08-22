import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


 export interface Call {
  date: string;
  time: string;
  duration: string;
}

@Component({
  selector: 'app-calls-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calls-table.component.html',
  styleUrl: './calls-table.component.css'
})
export class CallsTableComponent implements OnInit {


  @Input() userId!: number; // Input property to receive the user ID from the parent component

  calls: Call[] = []; // Array to hold the calls data
  
  ngOnInit(): void {
    this.calls = this.getCallsByUserId(this.userId);
  }


  getCallsByUserId(userId: number): Call[] {
    // Example data fetching logic (this should be replaced by an actual service call)
    const allCalls: { [key: number]: Call[] } = {
      1: [
        { date: '2024-08-20', time: '10:00 AM', duration: '15 mins' },
        { date: '2024-08-21', time: '02:00 PM', duration: '30 mins' }
      ],
      2: [
        { date: '2024-08-19', time: '11:00 AM', duration: '10 mins' },
        { date: '2024-08-22', time: '04:00 PM', duration: '20 mins' }
      ]
      // Add more users' call data here
    };

    return allCalls[userId] || [];
  }

}
