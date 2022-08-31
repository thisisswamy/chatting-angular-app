import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messege',
  templateUrl: './messege.component.html',
  styleUrls: ['./messege.component.scss']
})
export class MessegeComponent implements OnInit {

  userChatList:any[]=[
    {
      from:'Hello ram',
      fromDate:'12/2/2022',
      to:'Hello Bheem Hw ru',
      toDate:'22/3/20'
    },
    {
      from:'Em chestunav Mowa..',
      fromDate:'12/2/2022',
      to:'Em le mowa kali ye',
      toDate:'22/3/20'
    },
    {
      from:'Having funn ha',
      fromDate:'12/2/2022',
      to:'Nope....!',
      toDate:'22/3/20'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
