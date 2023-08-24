import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AddEmployeeDetailsComponent } from './components/add-employee-details/add-employee-details.component';
import { EditEmployeeDetailsComponent } from './components/edit-employee-details/edit-employee-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/employeeDetails',
    pathMatch: 'full'
  },
  {
    path: 'employeeDetails',
    component: EmployeeDetailsComponent,
  },
  {
    path: 'addemployeeDetails',
    component: AddEmployeeDetailsComponent
  },
  {
    path: 'editemployeeDetails/:id',
    component: EditEmployeeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
