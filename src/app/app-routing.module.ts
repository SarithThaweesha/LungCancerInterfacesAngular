import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatienthomeComponent } from './view/patienthome/patienthome.component';
import { PatientregisterComponent } from './view/patientregister/patientregister.component';
import { UpdatepatientComponent } from './view/updatepatient/updatepatient.component';
import { PatientloginComponent } from './view/patientlogin/patientlogin.component';
import { MainhomeComponent } from './view/mainhome/mainhome.component';
import { AdminregisterComponent } from './view/adminregister/adminregister.component';
import { AdminloginComponent } from './view/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './view/admindashboard/admindashboard.component';

const routes: Routes = [
  { path: 'home', component: MainhomeComponent },
  { path: 'admin-register', component: AdminregisterComponent },
  { path: 'admin-login', component: AdminloginComponent },
  { path: 'admin-dashboard', component: AdmindashboardComponent },
  { path: 'patient-register', component: PatientregisterComponent },
  { path: 'patient-home', component: PatienthomeComponent },
  { path: 'patient-login', component: PatientloginComponent },
  { path: 'update-patient', component: UpdatepatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
