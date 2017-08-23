import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MicomponentComponent } from './micomponent/micomponent.component';
import { OtroComponent } from './micomponent/otro.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { LifecycleComponent } from './lifecycle.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// tslint:disable-next-line:import-spacing
import {MyMaterialModuleModule} from './MyMaterialModuleModule';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    MicomponentComponent,
    OtroComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    LifecycleComponent,
    NavbarComponent,
    FooterComponent,
    DirectivasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MyMaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
