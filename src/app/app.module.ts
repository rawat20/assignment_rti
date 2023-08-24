import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AddEmployeeDetailsComponent } from './components/add-employee-details/add-employee-details.component';
import { EditEmployeeDetailsComponent } from './components/edit-employee-details/edit-employee-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDateCustomParserFormatter } from './services/ngb-date-format.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    AddEmployeeDetailsComponent,
    EditEmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
