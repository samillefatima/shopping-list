import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {

  providers: [
 
  provideRouter(routes),
 
  provideHttpClient(),
 
  provideAuth0({
 
  domain: 'dev-zetole.us.auth0.com',
 
  clientId: '30NeuFKjpOUtiWOhJoXyPJ6HW7hAmN1c',
 
  authorizationParams: {
 
  redirect_uri: window.location.origin,
 
  },
 
  }),
 
  ],
 
 };