import { Component, OnInit, signal } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  currentEmployee: any = signal([]);
  previousEmployee: any = signal([]);
  allEmployees: any = [];
  constructor(private service: LocalStorageService) { }
  ngOnInit(): void {
    this.getAllEmployees()

  }
  getAllEmployees() {
    this.service.getAll().subscribe({
      next: (res: any) => {
        if (res) {
          this.allEmployees = res?.result;
          this.updateListView()
        }
      }
    })
  }
  updateListView() {
    console.log("30", this.allEmployees)
    this.currentEmployee.set([])
    this.previousEmployee.set([])
    this.allEmployees.filter((emp: any) => {
      if (emp?.status === 'current') {
        this.currentEmployee.mutate((empList: any) => {
          empList.push(emp);
        })
      }
      else if (emp?.status === 'previous') {
        this.previousEmployee.mutate((empList: any) => {
          empList.push(emp);
        })
      }
    })
  }

  getMonthName(monthNumber: any) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', {
      month: 'short',
    });
  }

  deleteEmployee(key: any) {
    this.service.get(key).subscribe({
      next: (res: any) => {
        if (res) {
          let emp = res?.result;
          emp.status = 'previous';
          this.service.add(emp, key).subscribe({
            next: (res) => {
              if (res) {
                alert("Deleted successfully");
                this.getAllEmployees();
              }
              else {
                console.log("error");
              }
            }
          })
        }
      },
    })
  }

  deletePermanent(key: any) {
    this.service.delete(key).subscribe({
      next: (res: any) => {
        if (res) {
          alert("Deleted successfully");
          this.getAllEmployees();
        }
      },
      error: (err:any)=>{
        alert("Can not delete employee");
      }
    })
  }
}
