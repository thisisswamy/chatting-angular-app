import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './common/components/shared/shared.module';
import { ContactsComponent } from './common/components/contacts/contacts.component';
import { DisplayPageComponent } from './common/components/display-page/display-page.component';
import { TextBoxComponent } from './common/components/text-box/text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayPageComponent,
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
