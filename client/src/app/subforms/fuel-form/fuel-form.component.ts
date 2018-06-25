import { Component, OnInit } from '@angular/core';
import{ FuelForm } from './fuelformclass';
import { FuelEmployee } from './fuelemployee';

@Component({
  selector: 'app-fuel-form',
  templateUrl: './fuel-form.component.html',
  styleUrls: ['./fuel-form.component.css']
})
export class FuelFormComponent implements OnInit {

  fred: FuelEmployee = {
  name: '', sap: '', phone: ''};
  fuel: FuelForm = {
  test: 6,
  department: '',
  division: '',
  costcenter: '',
  deptreq: '',
  phoneext: '0',
  samemp: this.fred,
  emparray: []
 
  };
  constructor() { }
  ngOnInit() {
  }

}
