import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroDTO, Hero, HeroPatchDTO } from "./interfaces/Hero";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<HeroDTO[]> {
    return this.http.get<HeroDTO[]>(`${environment.HERO_API}${this.heroesUrl}`)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<HeroDTO[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<HeroDTO> {
    return this.http.get<HeroDTO>(`${environment.HERO_API}${this.heroesUrl}/${id}`)
      .pipe(
        tap(_ => this.log(`fetched hero with id=${id}`)),
        catchError(this.handleError<HeroDTO>(`getHero id=${id}`))
      );
  }

  updateHero(id: number, heroDTO: HeroPatchDTO): Observable<HeroPatchDTO> {
    let updateOps: any = [
      {
        path: "/name",
        op: "replace",
        value: heroDTO.name
      },
      {
        path: "/imageUrl",
        op: "replace",
        value: heroDTO.imageUrl
      },
      {
        path: "/backgroundStory",
        op: "replace",
        value: heroDTO.backgroundStory
      },
    ];

    console.log(`${environment.HERO_API}${this.heroesUrl} / ${id}`)
    console.log(updateOps)

    return this.http.patch<HeroPatchDTO>(`${environment.HERO_API}${this.heroesUrl}/${id}`, updateOps, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated hero w / id=${id}`)),
        catchError(this.handleError<Hero>('updateHero'))
      );
  }

  postHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${environment.HERO_API}${this.heroesUrl}`, hero, this.httpOptions)
      .pipe(
        tap((newHero: Hero) => this.log(`added hero w / id=${newHero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
  }

  deleteHero(id: number): Observable<Hero> {
    return this.http.delete<Hero>(`${environment.HERO_API}${this.heroesUrl}/${id}`, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted hero w / id=${id}`)),
        catchError(this.handleError<Hero>('deleteHero'))
      );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
