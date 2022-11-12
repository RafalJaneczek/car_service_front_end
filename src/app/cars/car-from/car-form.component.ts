import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CarsService} from '../cars.service';
import {Car} from '../models/car';
import {Router} from '@angular/router';

@Component({
  selector: 'cs-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.less']
})
export class CarFormComponent implements OnInit {

  carForm: FormGroup;

  @Input()
  car: Car;

  @Input()
  isUpdateForm: boolean = false;

  constructor(private carsService: CarsService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.carForm = this.buildCarForm();
  }

  addCar(): void {
    this.carsService.addCar(this.carForm.value).subscribe(() => {
      this.buildCarForm();
    });
  }

  updateCar(): void {
    this.carsService.updateCar(this.car.id, this.carForm.value).subscribe(() => {
      this.router.navigate(['/cars']);
    });
  }


  buildCarForm(): FormGroup {
    if (this.isUpdateForm) {
      return this.formBuilder.group({
        model: [this.car.model, Validators.required],
        type: [this.car.type, Validators.required],
        plate: [this.car.plate, [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
        deliveryDate: [this.car.deliveryDate, Validators.required],
        deadline: [this.car.deadline, Validators.required],
        color: [this.car.color, Validators.required],
        power: [this.car.power, Validators.required],
        clientFirstName: [this.car.clientFirstName, Validators.required],
        clientSurname: [this.car.clientSurname, Validators.required],
        cost: [this.car.cost, Validators.required],
        isFullyDamaged: this.car.isFullyDamaged,
        year: [this.car.year, Validators.required]
      });
    } else {
      return this.formBuilder.group({
        model: ['', Validators.required],
        type: ['', Validators.required],
        plate: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
        deliveryDate: ['', Validators.required],
        deadline: ['', Validators.required],
        color: ['', Validators.required],
        power: ['', Validators.required],
        clientFirstName: ['', Validators.required],
        clientSurname: ['', Validators.required],
        cost: ['', Validators.required],
        isFullyDamaged: false,
        year: ['', Validators.required],
      });
    }
  }

}
