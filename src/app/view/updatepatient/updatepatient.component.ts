import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.css']
})
export class UpdatepatientComponent {
  @Input() patient:any;
  @Output() update = new EventEmitter<any>(); // Output event to send updated data to the parent component
  @Output() closeModel = new EventEmitter<void>(); // Output event to close the modal
  
  updatePatient() {
    // Implement logic to update the patient data
    this.update.emit(this.patient); // Emit the updated patient data
    this.closeModel.emit(); // Close the modal
  }
  close() {
    this.closeModel.emit(); // Close the modal
  }
}
