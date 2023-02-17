import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/data/apartment';
import { ApartmentsResponse } from 'src/app/data/apartments-response';
import { ApartmentsService } from 'src/app/services/apartment-service/apartments.service';

@Component({
  selector: 'app-apartments-list',
  templateUrl: './apartments-list.component.html',
  styleUrls: ['./apartments-list.component.css']
})
export class ApartmentsListComponent implements OnInit {

  private _page: number = 1;
  public pageSize: number = 3;
  public apartments: Apartment[] = [];
  public isError: boolean = false;

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    if (value !== this._page) {
      this._page = value;
      //make request
      this.apartmentsService.searchApartments(
        {
          name: this.form.value.name ?? '',
          bedNumber: this.form.value.bedNumber!,
          city: this.form.value.city ?? '',
          paginationDTO: {
            page: this._page,
            numberOfElements: 10
          }
        }
      )
    }
  }


  constructor(private apartmentsService: ApartmentsService,
    private router: Router,
    private formBuilder: FormBuilder) {

  }

  form = this.formBuilder.group({
    name:'',
    bedNumber:0,
    city:''
  });

  ngOnInit(): void {
    this.apartmentsService.getApartmentsList(
      {
          page: this._page,
          numberOfElements: 10
      }
    ).subscribe({
      next: (response: ApartmentsResponse) => {
        this.isError = false;
        this.apartments = response.apartments;
        var count = response.numberOfApartments;
      },
      error: (error) => {
        this.isError = true;
      }
    });

  }

  Search(): void {
    this.apartmentsService.searchApartments(
      {
        name: this.form.value.name ?? '',
        bedNumber: this.form.value.bedNumber!,
        city: this.form.value.city ?? '',
        paginationDTO: {
          page: this._page,
          numberOfElements: 10
        }
      }
    ).subscribe({
      next: (response) => {
        this.isError = false;
        this.apartments = response.apartments;
        var count = response.numberOfApartments;
      },
      error: (error) => {
        this.isError = true;
      }
    });
  }

  GetApartmentsList(): void {

  }

}
 