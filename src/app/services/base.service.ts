import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpXhrBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  public http = new HttpClient(
    new HttpXhrBackend({ build: () => new XMLHttpRequest() })
  );
  urlApi = 'https://localhost:7095/Country';
  constructor() {}

  public get(
    urlComplementary: string,
    params?: any,
    options?: any
  ): Observable<any> {
    if (options) {
      options = options;
    } else {
      options = this.getOptions();
    }

    const urlFull = this.getUrl(urlComplementary, params);

    return this.http.get(urlFull, options);
  }

  private getUrl(urlComplementary: string, params?: any) {
    let paramsString: string;

    if (params) {
      paramsString = '/' + params;
    } else {
      paramsString = '';
    }
    return this.urlApi + `/${urlComplementary}${paramsString}`;
  }

  private getOptions() {
    let httpHeaders = new HttpHeaders();

    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    httpHeaders = httpHeaders.append('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('Accept', 'application/json');
    httpHeaders = httpHeaders.append(
      'Access-Control-Allow-Headers',
      'Content-Type'
    );
    return {
      headers: httpHeaders,
    };
  }
}
