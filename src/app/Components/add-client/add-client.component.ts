import { Component } from '@angular/core';
import { IClientAdd } from '../../models/IClientAdd';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { APIClientsService } from '../../service/apiclients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {
 newClient:IClientAdd={} as IClientAdd;

  constructor(private _APiClientService:APIClientsService,private router:Router){}

  addNewClient()
 {
   this._APiClientService.addClient(this.newClient).subscribe({
    next:()=>
    {
     alert('Done');
     this.router.navigateByUrl('/Clients')
    },
    error:(err)=>
    {
      console.log(err);
    }
   })
 }
 onCancel(){
  this.router.navigateByUrl('/Clients')
 }
}
