import { Component, Input, OnInit } from '@angular/core';
import { APIClientsService } from '../../service/apiclients.service';
import { CommonModule } from '@angular/common';
import { IClientAdd } from '../../models/IClientAdd';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-client',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './update-client.component.html',
  styleUrl: './update-client.component.css'
})
export class UpdateClientComponent implements OnInit {
 clientId!: number;
  //client: Client={} as Client;
  newClient: IClientAdd = {} as IClientAdd;

constructor(private _ApiService:APIClientsService,private router :Router, 
  private route: ActivatedRoute){}


  ngOnInit(): void {
    this.clientId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.clientId) {
      this.loadClientData();
    } 
  
  }
  loadClientData(): void {
    this._ApiService.getClientById(this.clientId).subscribe({
      next: (res: any) => {
        console.log(res);
  
        this.newClient = res;
      },
      error: (err) => {
        console.error('Error loading client data:', err);
      }
    });
  }
  
  


 updateClient()
 {
  this._ApiService.updateClient(this.clientId ,this.newClient).subscribe({

    next:()=>
      {
       alert('Update successful');
       this.router.navigateByUrl('/Clients')
      },
      error:(err)=>
      {
        console.log('Error updating client:',err);
        alert('Failed to update client.');
      }
  })
 }

 onCancel(){
  this.router.navigateByUrl('/Clients')
 }

}
