import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  private apiUrl = 'https://api.magicthegathering.io/v1/sets';

  constructor(private http: HttpClient) { }

  public getCards(parameter: any): Observable<[any]> {
    //return this.http.get<any[]>(`${this.apiUrl}/${parameter}/booster`).pipe(
    return this.http.get<any[]>(`${this.apiUrl}/ktk/booster`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }


}
