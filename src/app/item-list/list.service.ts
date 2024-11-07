import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface ShoppingList {
  id: number;
  title: string;
  userId: number;
  included: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/shopping-list';

  constructor(private http: HttpClient) {}


  getShoppingLists(): Observable<ShoppingList[]> {
    return this.http.get<ShoppingList[]>(this.apiUrl);
  }


  addShoppingList(newItem: Partial<ShoppingList>): Observable<ShoppingList> {
    return this.http.post<ShoppingList>(this.apiUrl, newItem);
  }


  deleteShoppingList(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocorreu um erro desconhecido!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro de rede: ${error.error.message}`;
    } else {
      switch (error.status) {
        case 404:
          errorMessage = 'Recurso não encontrado!';
          break;
        case 500:
          errorMessage = 'Erro interno do servidor!';
          break;
        case 0:
          errorMessage = 'Falha de conexão. Verifique sua internet.';
          break;
        default:
          errorMessage = `Erro: ${error.status} - ${error.message}`;
      }
    }
    alert(errorMessage); // Exibe mensagem de erro
    return throwError(errorMessage);
}
}