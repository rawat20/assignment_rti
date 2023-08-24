import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-add-employee-details',
  templateUrl: './add-employee-details.component.html',
  styleUrls: ['./add-employee-details.component.scss']
})
export class AddEmployeeDetailsComponent implements OnInit{
  employeeForm = new FormGroup({
    name : new FormControl({value: null, disabled: false},[Validators.required]),
    Designation : new FormControl({value: 'Select role', disabled: false},[Validators.required]),
    todayDate : new FormControl({value: null, disabled: false},[Validators.required]),
    noDate : new FormControl({value: null, disabled: false},[Validators.required])
  })
  constructor(private service:LocalStorageService,private router: Router){}
  ngOnInit(): void {
  }

  submit(){
    let obj:any = this.employeeForm.getRawValue();
    console.log("obj",obj)
    obj['status']='current';
    let key = obj?.name + obj?.Designation + obj?.todayDate?.month;
    obj['keyName'] = key;
    this.service.add(obj,key).subscribe({
      next: (res)=>{
        if(res){
          alert("added successfully");
          this.router.navigate(['/employeeDetails'])
        }
        else{
          console.log("error");
        }
      }
    })
  }
}
