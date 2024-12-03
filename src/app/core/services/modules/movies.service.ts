import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

    private readonly baseUrl?: string;
    private apiKey = 'a35f6d77'; 

    constructor(
        private _http: HttpClient,
    ) { 
        this.baseUrl = environment!.url;
    }

    public getUrl(endpoint: string) {
        return this.baseUrl + (endpoint || ''); 
    }

    /**
     * Permite traer la lista de movies
     */
    searchMovies(query: string): Observable<any> {
        const params = new HttpParams()
          .set('s', query)
          .set('apikey', this.apiKey)
        return this._http.get(environment.url, { params });
      }

}




