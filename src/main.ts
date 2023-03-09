import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
  NgbModalModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, NgbModalModule, NgbDatepickerModule],
  templateUrl: `main.html`,
})
export class App {
  closeResult = '';
  constructor(private modalService: NgbModal) {}
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

bootstrapApplication(App);
