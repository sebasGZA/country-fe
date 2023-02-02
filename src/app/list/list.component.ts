import { Component, Input } from '@angular/core';
import { CountryService } from '../search/services/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  private _countrySvc = new CountryService();
  currentRoute: string;
  @Input()
  countries: any[] = [];

  constructor(private _route: ActivatedRoute) {
    this.currentRoute = this._route.snapshot.data['currentRoute'] || 'all';
  }

  ngOnInit() {
    if (this.countries.length == 0 && this.currentRoute == 'all') {
      this._countrySvc.getCountries().subscribe((resp) => {
        this.countries = resp.data;
      });
    }
  }
}
