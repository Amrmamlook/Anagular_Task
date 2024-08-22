import { Routes } from '@angular/router';
import { AddClientComponent } from './Components/add-client/add-client.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { CallsComponent } from './Components/calls/calls.component';
import { UserTableComponent } from './Components/user-table/user-table.component';

export const routes: Routes = [
    {path:"AddClient",component:AddClientComponent},
    {path:"Clients",component:ClientsComponent},
    {path:"Calls",component:CallsComponent},
    {path:"TBUser",component:UserTableComponent}
];
