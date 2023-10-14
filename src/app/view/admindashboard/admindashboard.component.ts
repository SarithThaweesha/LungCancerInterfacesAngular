import { Component } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {
  patients: any[]=[
    {

    },
  ];
  updatePatient(patient: any) {
    // Update logic for the patient
  }

  deletePatient(patient: any) {
    // Update logic for the patient
  }

}
