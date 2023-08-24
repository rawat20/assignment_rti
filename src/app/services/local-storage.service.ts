import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
declare var db:any;
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public storagename = 'employees';
  constructor() { }

  add(value:any,keyName:any){
     return new Observable((observer:any)=>{
      if(db != undefined){
        const req = db.transaction([this.storagename],"readwrite").objectStore(this.storagename).put(value,keyName)
    
        req.onsuccess = (e:any)=>{
          if(e.target.result){
            console.log("success")
            observer.next('success')
          }
          else{
            console.log("issue")
            observer.next('error')
          }
        }
      }
     })
    
  }

  get(keyName:any){
    return new Observable((observer:any)=>{
      if(db != undefined){
        const req = db.transaction([this.storagename],"readwrite").objectStore(this.storagename).get(keyName)
    
        req.onsuccess = (e:any)=>{
          if(e.target.result){
            console.log("success")
            observer.next(req)
          }
          else{ 
            console.log("issue")
            observer.next(false)
          }
        }
      }
     })
    
  }
  getAll(){
    return new Observable((observer:any)=>{
      if(db != undefined){
        const req = db.transaction([this.storagename],"readwrite").objectStore(this.storagename).getAll()
    
        req.onsuccess = (e:any)=>{
          if(e.target.result){
            console.log("success")
            observer.next(req)
          }
          else{ 
            console.log("issue")
            observer.next(false)
          }
        }
      }
     })
    
  }

  delete(keyName:any){
    return new Observable((observer:any)=>{
      if(db != undefined){
        const req = db.transaction([this.storagename],"readwrite").objectStore(this.storagename).delete(keyName)
    
        req.onsuccess = (e:any)=>{
            console.log("76 deleted");
            observer.next(true)
        }

        req.onerror = (e:any) => {
          observer.error(false)
      }
      }
     })
  }
}
