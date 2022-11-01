import {Component, OnInit} from '@angular/core';
import {MdbModalRef} from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'cs-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent {

  title: string | null = null;

  constructor(public modalRef: MdbModalRef<ModalComponent>) {
  }

}
