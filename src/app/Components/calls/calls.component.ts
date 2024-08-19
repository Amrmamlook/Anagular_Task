import { Component, Input, OnInit } from '@angular/core';
import { ClientsComponent } from '../clients/clients.component';
import { APIClientsService } from '../../service/apiclients.service';
import { ICallDto } from '../../models/ICallDto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calls',
  standalone: true,
  imports: [ClientsComponent,CommonModule],
  templateUrl: './calls.component.html',
  styleUrl: './calls.component.css'
})
export class CallsComponent implements OnInit {
  @Input() clientId!: number;
  calls: ICallDto[]=[];
  totalCount: number = 0;
  page: number = 1;
  pageSize: number = 5;
  hasNextPage: boolean = false;
  hasPreviousPage: boolean = false;
 
 constructor(private _APIClientsService:APIClientsService) {
  
 }

  ngOnInit(): void {
    if (this.clientId) {
      this.loadCalls();
    }
  }
  loadCalls()
  {
    this._APIClientsService.getCallsofClient(this.clientId, this.page, this.pageSize).subscribe({
      next: (res: any) => {
        this.calls = res.items; 
        this.totalCount = res.totalCount; 
        this.hasNextPage = res.hasNextPage;
        this.hasPreviousPage = res.hasPreviousPage;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  nextPage() {
    if (this.hasNextPage) {
      this.page++;
      this.loadCalls();
    }
  }

  previousPage() {
    if (this.hasPreviousPage) {
      this.page--;
      this.loadCalls();
    }
  }
}
