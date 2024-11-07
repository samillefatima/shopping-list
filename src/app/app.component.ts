import { Component, Inject } from '@angular/core';
import { AuthService} from '@auth0/auth0-angular';
import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';  
import { CommonModule } from '@angular/common';


@Component({

  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, ItemListComponent,  CommonModule] 

})

export class HeaderComponent {


  title = 'my-app'; 

 constructor(public auth: AuthService) {}


login() {
 this.auth.loginWithRedirect();

 }
 logout() {

  this.auth.logout().subscribe(() => {
    
    window.location.replace('/login');  
  });
}
}

