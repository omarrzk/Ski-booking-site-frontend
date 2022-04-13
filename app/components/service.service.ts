import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public packageValue = new Subject<any>();
  public confirmTicket = new Subject<any>();

  constructor(private http:HttpClient,private router:Router) { }

  getValues() {
    return this.http.get(`https://www-th-frontend.azurewebsites.net/api/exam/v1/skiequipment`)
  }


  bookPackage(package1:any) {
    const url = `https://www-th-frontend.azurewebsites.net/api/exam/v1/booking`;
    const payload = {
      "skiEquipmentId": package1.skiEquipmentId, "name": package1.name
    };
    this.http.post(url,payload).subscribe({
      next : data => {
        this.router.navigate(["booking","confirm"]).then(() => {
          this.confirmTicket.next({...data,name:package1.name});
          // setTimeout(() => {
          //   this.router.navigate([""])
          // },5000)
        })
       
      },
      error: error => {
        console.error('There was an error!', error);
    }
    })
  }
}
