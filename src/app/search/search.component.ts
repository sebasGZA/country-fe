import { Component } from '@angular/core';
import { CountryService } from './services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../list/country.type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  private _countrySvc: CountryService;
  currentRoute: string | undefined;
  value: string | null = '';
  countries: Country[] = [];

  constructor(private _route: ActivatedRoute, private _mtoast: ToastrService) {
    this._countrySvc = new CountryService();
    this.currentRoute = this._route.snapshot.data['currentRoute'] || 'all';
  }

  onChange(event: any) {
    this.value = event.target.value;
  }

  onClick() {
    if (!this.value) {
      this._mtoast.error('Fill all the fields', 'Error');
      return;
    }
    if (this.currentRoute == 'region') {
      this._countrySvc.getCountriesByRegion(this.value!).subscribe((resp) => {
        this.countries = resp.data;
      });
    } else {
      this._countrySvc.getCountriesByName(this.value!).subscribe(
        (resp) => (this.countries = resp.data),
        (error) => this._mtoast.error(error.message, 'Error')
      );
    }
  }
}
