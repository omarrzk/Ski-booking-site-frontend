import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit,OnDestroy {
  public selectedPackage:any = false;
  public confirmValue:any = false;
   nameForm: FormGroup = new FormGroup({});

  constructor(private service:ServiceService,private router:Router,private formBuilder:FormBuilder) {

    this.service.packageValue.subscribe(resp => {
        this.selectedPackage = resp;
    });

    this.service.confirmTicket.subscribe(resp => {
      this.confirmValue = resp;
    })
   }

  //starta formuläret
  ngOnInit(): void {
  this.nameForm = this.formBuilder.group({
    name:['',Validators.required]
  })
  }

  //bokning av valt paket
  onReserve(){
    const payload = { "skiEquipmentId": this.selectedPackage.id, "name": this.nameForm.value.name };
    this.service.bookPackage(payload)
  }

  onCancel() {
    this.router.navigate([''])
  }

  ngOnDestroy(): void {
      this.service.packageValue.next(false);
      this.service.confirmTicket.next(false);
  }

}
