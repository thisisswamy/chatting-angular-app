import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  isMoreOpen!:boolean;
  ngOnInit(): void {
  }
  openMoreoprions(){
    this.isMoreOpen = this.isMoreOpen ? false:true;
  }
  closeOptions(event:any){
    if(event.target.tagName=='LI'){
      this.isMoreOpen=false;
    }
  }

}
