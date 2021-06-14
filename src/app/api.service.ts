import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const apiUrl = 'http://localhost:3333/adotacachorro';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  getAllDogs(): Observable<any[]>{
    return this.http.get<any[]>(apiUrl+'/getAll').pipe(
      tap(gameTopic => console.log('todos games Topics lidos')),
      catchError(this.handleError('getAllGamestopics',[]))
    );
  }
  
  getOneDog(id: string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`leu gameT id=${id}`)),
      catchError(this.handleError<any>(`getOneGameTopic id=${id}`))
    );
  }
  
  addDog (gameTopic: any): Observable<any> {
    return this.http.post<any>(apiUrl+'/', gameTopic).pipe(
      tap((game: any) => console.log(`adicionou o gameTopic com w/ id=${game._id}`)),
      catchError(this.handleError<any>('gameTopic'))
    );
  }

  updateDog(id, gameTopic): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, gameTopic).pipe(
      tap(_ => console.log(`atualiza gameTopic com id=${id}`)),
      catchError(this.handleError<any>('updateGameTopic'))
    );
  }

  deleteDog (id:string): Observable<any> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<any>(url).pipe(
      tap(_ => console.log(`remove gameTopic id=${id}`)),
      catchError(this.handleError<any>('deleteGameTopic'))
    );
  }

  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
