import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="error-page">
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, a página que você procura não existe.</p>
      <button (click)="goHome()">Ir para a página inicial</button>
    </div>
  `,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  goHome() {
    window.location.href = '/';
  }
}
