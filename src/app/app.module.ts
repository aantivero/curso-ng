import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MicomponentComponent } from './micomponent/micomponent.component';
import { OtroComponent } from './micomponent/otro.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MicomponentComponent,
    OtroComponent,
    DatabindingComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
