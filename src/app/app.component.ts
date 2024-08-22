import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { UserTableComponent } from './Components/user-table/user-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,ClientsComponent,RouterOutlet,UserTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task1';
}
