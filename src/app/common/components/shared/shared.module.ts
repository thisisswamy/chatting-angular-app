import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MessegeComponent } from '../messege/messege.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { TextBoxComponent } from '../text-box/text-box.component';
@NgModule({
  declarations: [
    HeaderComponent,MessegeComponent,ContactsComponent,TextBoxComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HeaderComponent,MessegeComponent,ContactsComponent,TextBoxComponent,
  ]
})
export class SharedModule { }
