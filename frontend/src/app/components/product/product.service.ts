import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly BASE_URL: string = 'http://localhost:3001/products';

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly http: HttpClient
  ) {}

  showMessage(msg: string) {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.BASE_URL, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL);
  }
}
