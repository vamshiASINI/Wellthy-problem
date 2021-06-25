import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PunkApiService {
  private api = 'https://api.punkapi.com/v2/beers';

  constructor( private httpClient: HttpClient,) { }
  getBeersRandom(): Observable<any> {
    const reqHeaders={
      headers:new HttpHeaders({'content-Type':'application/json','x-ratelimit-limit': '3600','x-ratelimit-remaining': '3600'})
    }
    return this.httpClient.get(`${this.api}/random`,reqHeaders)
  }
  nonalcholicBeer():Observable<any>{

    let params = new HttpParams();
    params = params.append('abv_lt', '0.05');

    return this.httpClient.get(this.api,{params:params})
  }
  search(search): Observable<any> {
    let params = new HttpParams();
    params = params.append('beer_name', search.name);
    return this.httpClient.get(this.api, { params: params })
  }
}
