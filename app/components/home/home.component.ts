import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  packages: any;
  viewMore: any;

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.service.getValues().subscribe((resp:any) => {
      console.log("Resp",resp);
      this.packages = resp;
    })
  }

  onView(pack:any) {
    if(!this.viewMore || this.viewMore.id !== pack.id) {
      this.viewMore = pack;
    } else if(this.viewMore && this.viewMore.id === pack.id) {
      this.viewMore = false;
    }
   
  }

  onSelect(pack:any) {
   console.log("selected",pack);
   this.router.navigate(['booking']).then(() => this.service.packageValue.next(pack))
  //  this.service.packageValue
  }

}
