import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router'; 
import { LoginComponent } from './login/login.component'; 
import { ItemListComponent } from './item-list/item-list.component';
import { AuthGuard } from './login/auth.guard';
import { AuthService } from './login/auth.services'; 
import { HeaderComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor'; 
import { CommonModule } from '@angular/common'; 
import { AuthModule } from '@auth0/auth0-angular';

const authConfig = {
  domain: 'dev-zetole.us.auth0.com',  
  clientId: '30NeuFKjpOUtiWOhJoXyPJ6HW7hAmN1c',  
  redirectUri: window.location.origin
};

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
 
    AuthModule.forRoot(authConfig),
    RouterModule.forRoot([ 
      { path: 'login', component: LoginComponent },
      { path: 'items', component: ItemListComponent, canActivate: [AuthGuard] }, 
      { path: '', redirectTo: '/login', pathMatch: 'full' } 
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ], 
  bootstrap: [HeaderComponent]
})
export class AppModule { }