import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
 public employees = [];
  constructor(private _employeeservice:ServiceService) { }
  ngOnInit() {
   this._employeeservice.getEmployees().subscribe(data => this.employees=data);
  }

}
