import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { BehaviorSubject } from 'rxjs';
import { Countries, Country } from '../_models/CountriesModel';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private _http: WebService) { }

  private url = 'https://restcountries.eu/rest/v2/all';

  public CountriesSource = new BehaviorSubject<Countries>({
    list: []
  });

  public getCountries() {
    this._http.Get<Country[]>(this.url, false).subscribe((response: Country[]) => {
      // tslint:disable-next-line:prefer-const
      let countries: Countries = { list: [] };
      countries.list = response;
      this.CountriesSource.next(countries);
    });
  }
}
