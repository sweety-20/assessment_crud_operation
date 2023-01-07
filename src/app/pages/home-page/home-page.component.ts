import { FormBuilder, FormGroup } from '@angular/forms'
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild('closebutton') closebutton: any;
  employeeDetails!: FormGroup

  name = "";
  email = "";
  address = "";
  phone = "";

  list:any = [];

  constructor(private formBuilder: FormBuilder, private service: ApiService) {
  
  }

  ngOnInit(): void {
    this.employeeDetails = this.formBuilder.group({
      id: Date.now(),
      name: [''],
      email: [''],
      address: [''],
      phone: [''],

    })
    this.getEmployee();
  }

  // add employee
  addEmployee() {
    this.service.addEmployee(this.employeeDetails.value).subscribe((data: any) => {
      this.getEmployee();
      this.employeeDetails.reset();
      this.closebutton.nativeElement.click();
    })
    
  }


 // show employee
  getEmployee() {
    this.service.getEmployee().subscribe(res => {
      this.list = res; 
    })
  }

  // delete employee
  deleteEmployeeDetails(data: any) {
    this.service.deleteEmployee(data).subscribe(res => {
      this.list = res;
      this.getEmployee();
    })
  }

  // delete all employee
  deleteAll() {
   this.list = [];
  }
}
