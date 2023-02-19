import {Component, OnInit} from '@angular/core';
import {Vehicle} from '../../../vehicle';
import {CarService} from '../../service/car.service';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'cs-delete-car-modal',
  templateUrl: './remove-vehicle-modal.component.html',
  styleUrls: ['./remove-vehicle-modal.component.less']
})
export class RemoveVehicleModalComponent implements OnInit {

  vehicle: Vehicle;

  constructor(private carsService: CarService,
              private modalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  public closeModal(): void {
    this.modalRef.hide();
  }


}
