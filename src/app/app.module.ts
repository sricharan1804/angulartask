import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ServicesComponent } from './services/services.component';
import { Work1Component } from './works/work1/work1.component';
import { Work2Component } from './works/work2/work2.component';
import {MatStepperModule} from '@angular/material/stepper';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactComponent,
    AboutComponent,
    ClientsComponent,
    ServicesComponent,
    Work1Component,
    Work2Component,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
