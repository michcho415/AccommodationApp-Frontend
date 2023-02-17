import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaginationInfo } from 'src/app/data/pagination-info';
import { Constants } from 'src/app/data/app-constants';
import { SearchApartmentsRequestData } from 'src/app/data/search-apartments';
import { Observable } from 'rxjs';
import { ApartmentsResponse } from 'src/app/data/apartments-response';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {

  constructor(private http: HttpClient) { }

  constants: Constants = new Constants();

  getApartmentsList(paginationInfo: PaginationInfo) {
    var response = this.http.post<ApartmentsResponse>(
      this.constants.apiUrl + '/Apartments/All',
      paginationInfo
    )
    return response;
  }

  searchApartments(data: SearchApartmentsRequestData): Observable<ApartmentsResponse> {
    var response = this.http.post<ApartmentsResponse>(
      this.constants.apiUrl + "/Apartments/Search",
      data
    )
    return response;
  }
}
