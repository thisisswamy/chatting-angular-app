import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MessegeComponent } from '../messege/messege.component';
import { ContactsComponent } from '../contacts/contacts.component';
@NgModule({
  declarations: [
    HeaderComponent,MessegeComponent,ContactsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HeaderComponent,MessegeComponent,ContactsComponent
  ]
})
export class SharedModule { }
