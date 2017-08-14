import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MicomponentComponent } from './micomponent/micomponent.component';
import { OtroComponent } from './micomponent/otro.component';

@NgModule({
  declarations: [
    AppComponent,
    MicomponentComponent,
    OtroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
