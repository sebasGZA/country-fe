import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _baseSvc: BaseService = new BaseService();

  getCountries(): Observable<any> {
    return this._baseSvc.get('');
  }
  getCountriesByRegion(region: String): Observable<any> {
    return this._baseSvc.get(`region/${region}`);
  }
  getCountriesByName(name: String): Observable<any> {
    return this._baseSvc.get(`name/${name}`);
  }
}
