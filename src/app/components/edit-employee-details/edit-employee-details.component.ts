import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-edit-employee-details',
  templateUrl: './edit-employee-details.component.html',
  styleUrls: ['./edit-employee-details.component.scss']
})
export class EditEmployeeDetailsComponent implements OnInit {

  keyValue:any;
  employeeForm = new FormGroup({
    name : new FormControl({value: null, disabled: false},[Validators.required]),
    Designation : new FormControl({value: 'Select role', disabled: false},[Validators.required]),
    todayDate : new FormControl({value: null, disabled: false},[Validators.required]),
    noDate : new FormControl({value: null, disabled: false},[Validators.required])
  })
  constructor(private service:LocalStorageService,private ActivatedRoute:ActivatedRoute,private router: Router){
  }
  ngOnInit(): void {
    this.keyValue = this.ActivatedRoute.snapshot.paramMap.get("id");
    this.loadData()
    console.log("16",this.keyValue)
  }

  loadData(){
    this.service.get(this.keyValue).subscribe({
      next: (res:any)=>{
        if(res){
          let temp = res?.result;
          this.employeeForm.patchValue({
            name: temp?.name,
            Designation: temp?.Designation,
            todayDate: temp?.todayDate,
            noDate: temp?.noDate
          })
        }
      }
    })
  }

  submit(){
    let obj:any = this.employeeForm.getRawValue();
    console.log("obj",obj)
    obj['status']='current';
    obj['keyName'] = this.keyValue;
    this.service.add(obj,this.keyValue).subscribe({
      next: (res)=>{
        if(res){
          alert("Updated successfully");
          this.router.navigate(['/employeeDetails'])
        }
        else{
          console.log("error");
        }
      }
    })
  }
}
