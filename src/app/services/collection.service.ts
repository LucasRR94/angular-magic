import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private apiCollectionUrl = 'https://api.magicthegathering.io/v1/sets?'

  constructor(private http: HttpClient) { }

  public getCollections(argumentUrl: string): Observable<[any]> {
    console.log('adress', `${this.apiCollectionUrl}${argumentUrl}`);
    return this.http.get<any[]>(`${this.apiCollectionUrl}${argumentUrl}`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error: any) => {
        console.error('Error fetching collections:', error);
        throw new error('Something went wrong. Please try again.'); // Handle the error and re-throw
      })
    );
  }
}
