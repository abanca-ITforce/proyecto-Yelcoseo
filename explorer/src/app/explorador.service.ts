import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExploradorService {
  url = 'https://api.worldbank.org/v2/country?per_page=1000&format=json';

  constructor(private http: HttpClient) { }

  countries = [];

  getAllCountries() {
    return this.http.get<any[]>(this.url).pipe(map(data => (data ? data[1] : [])));
  }

  getCountryId(id) {
    return this.http.get(`https://api.worldbank.org/v2/country/${id}?per_page=1000&format=json`)
    .pipe(map(data => (data ? data[1][0] : [])));

  }

  getAllRegions() {
    return this.http.get(`https://api.worldbank.org/v2/region/?format=json`)
    .pipe(map(data => (data ? data[1] : [])));
  }

  getRegionInfo(id){
    return this.http.get(`https://api.worldbank.org/v2/region/${id}?format=json`)
    .pipe(map(data => data ? data[1][0] : []));
  }

  getRegionCountryList(id){
    return this.http.get(`https://api.worldbank.org/v2/country?region=${id}&per_page=1000&format=json`)
    .pipe(map(data => (data ? data[1] : [])));
  }


}


