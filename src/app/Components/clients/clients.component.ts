import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IClient } from '../../models/iclient';
import { APIClientsService } from '../../service/apiclients.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterOutlet,RouterLink], 
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {

  clients :IClient[] = [] as IClient[];
  totalCount = 0;
  page: number = 1;
  pageSize: number = 5;
  hasNextPage: boolean = false;
  hasPreviousPage: boolean= false;
  showClientCalls: { [key: number]: boolean } = {};
  newClient: any = {};
   constructor(private _APIClientsService:APIClientsService) {}
  

   ngOnInit(): void 
   {
    this.loadClient();
  }

  toggleClientCalls(clientId: number) {
    this.showClientCalls[clientId] = !this.showClientCalls[clientId];
  }
  toggleShowCalls(clientId: number) {
    this.showClientCalls[clientId] = !this.showClientCalls[clientId];
  }

  loadClient()
  {
    this._APIClientsService.getClients(this.page,this.pageSize).subscribe({
      next: (res: any) => {
        console.log(res);
        this.clients = res.items.map((client: any) => ({
          name: client.اسم_العميل,
          residence: client.الاقامة,
          job: client.الوظيفة,
          addedBy: client.أضيف_بواسطة,
          dateAdded: client.تاريخ_الادخال,
          modifiedBy: client.تم_التعديل_بواسطة,
          dateModified: client.تاريخ_التعديل,
          SalesMan: client.رجل_المبيعات,
          ClientClassification:client.التصنيف,
          Description: client.التوصيف,
        }));
          this.totalCount = res.pageSize;
          this.hasNextPage= res.hasNextPage,
          this.hasPreviousPage= res.hasPerviousPage
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  showSettings = false; 
  displayColumns = {
    name: true,
    Resdience: true,
    DateAdded: true,
    AddedBy:true,
    ModifiedBy:true,
    dateModified:true,
    Job:true,
    SalesMan:true,
    ClientClassification:true,
    id :true,
    Description:true
  };
  toggleSettings() {
    this.showSettings = !this.showSettings;
  }
  nextPage() {
    if (this.hasNextPage) {
      this.page++;
      this.loadClient();
    }
  }
  previousPage() {
    if (this.hasPreviousPage) {
      this.page--;
      this.loadClient();
    }
  }
  deleteClient(client: any) {
  }
  
  searchClients()
  {

  }
  printClients(){}
}