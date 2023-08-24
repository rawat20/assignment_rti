import { Component, HostListener } from '@angular/core';
declare var db :any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment_rti';
  public storagename = 'employees';

  constructor(){}
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event:Event) {
    alert("db is active"+db)
    if(db != undefined){
      alert("db is active"+db)
      db.close();
      db = null;
    }
    return false;
  }
  
}
