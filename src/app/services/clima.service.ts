import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  url = 'http://api.openweathermap.org/data/2.5/weather?&appid=';
  key = '82509e622e2f794d1ca02883422b616c';

  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any> {

    const URL = this.url + this.key + '&q='+ ciudad;
    return this.http.get(URL)
  }
}
