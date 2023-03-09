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
  template: `
  <ng-template #content let-modal>
	<div class="modal-header">
		<h4 class="modal-title" id="modal-basic-title">Profile update</h4>
		<button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss('Cross click')"></button>
	</div>
	<div class="modal-body">
		<form>
			<div class="mb-3">
				<label for="dateOfBirth">Date of birth</label>
				<div class="input-group">
					<input
						id="dateOfBirth"
						class="form-control"
						placeholder="yyyy-mm-dd"
						name="dp"
						ngbDatepicker
						#dp="ngbDatepicker"
					/>
					<button class="btn btn-outline-secondary bi bi-calendar3" (click)="dp.toggle()" type="button"></button>
				</div>
			</div>
		</form>
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Save</button>
	</div>
</ng-template>
<div class="container-fluid pt-5">
<button class="btn btn-lg btn-outline-primary" (click)="open(content)">Launch demo modal</button>

<hr />

<pre>{{ closeResult }}</pre>
</div>
  `,
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
