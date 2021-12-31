import { Component, OnInit } from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("John", "Doe", "johndoe@email.com", 20000),
    new SalesPerson("Clare", "Doe", "claredoe@email.com", 30000),
    new SalesPerson("Pepin", "Doe", "pepindoe@email.com", 40000),
    new SalesPerson("Swan", "Doe", "swanoe@email.com", 50000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
