import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainhomeComponent } from './view/mainhome/mainhome.component';
import { PatientloginComponent } from './view/patientlogin/patientlogin.component';
import { PatientregisterComponent } from './view/patientregister/patientregister.component';
import { PatienthomeComponent } from './view/patienthome/patienthome.component';
import { AdminloginComponent } from './view/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './view/adminregister/adminregister.component';
import { AdmindashboardComponent } from './view/admindashboard/admindashboard.component';
import { UpdatepatientComponent } from './view/updatepatient/updatepatient.component';

@NgModule({
  declarations: [
    AppComponent,
    MainhomeComponent,
    PatientloginComponent,
    PatientregisterComponent,
    PatienthomeComponent,
    AdminloginComponent,
    AdminregisterComponent,
    AdmindashboardComponent,
    UpdatepatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
