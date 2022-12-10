import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CarsService} from '../service/cars.service';
import {Car} from '../../model/car';
import {Router} from '@angular/router';
import {CarUtils} from '../utils/car-utils';
import {VehicleUtils} from '../../vehicle-utils';
import {acceptOnlyDigits} from '../../validators';

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

  bodyTypes: Map<string, string> = CarUtils.bodyTypes;
  engineTypes: Map<string, string> = CarUtils.engineTypes;
  conditionStatuses: Map<string, string> = VehicleUtils.condition;
  damageStatuses: Map<boolean, string> = VehicleUtils.isDamaged;
  numberOfSeatsArray: number[] = CarUtils.numberOfSeatsArray;
  productionYears: number[] = [];

  mark: FormControl;
  model: FormControl;
  bodyType: FormControl;
  course: FormControl;
  productionYear: FormControl;
  numberOfSeats: FormControl;
  engineCapacity: FormControl;
  enginePower: FormControl;
  engineType: FormControl;
  vehicleCondition: FormControl;
  damaged: FormControl;
  price: FormControl;

  private readonly MIN_PRODUCTION_YEAR: number = 1900;
  private readonly EMPTY_STRING = '';

  constructor(private carsService: CarsService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getProductionYears();
    this.createControls();
    this.createForm();
  }

  addCar(): void {
    this.carsService.addCar(this.carForm.value).subscribe(() => {
      this.createControls();
    });
  }

  updateCar(): void {
    this.carsService.updateCar(this.car.id, this.carForm.value).subscribe(() => {
      this.router.navigate(['/cars']);
    });
  }

  private createForm(): void {
    this.carForm = new FormGroup({
      mark: this.mark,
      model: this.model,
      bodyType: this.bodyType,
      course: this.course,
      productionYear: this.productionYear,
      numberOfSeats: this.numberOfSeats,
      engineCapacity: this.engineCapacity,
      enginePower: this.enginePower,
      engineType: this.engineType,
      vehicleCondition: this.vehicleCondition,
      damaged: this.damaged,
      price: this.price
    });
  }

  private createControls(): void {
    if (this.isUpdateForm) {
      this.mark = new FormControl(this.car.mark, [Validators.required, Validators.minLength(2)]);
      this.model = new FormControl(this.car.model, [Validators.required, Validators.minLength(2)]);
      this.bodyType = new FormControl(this.car.bodyType);
      this.course = new FormControl(this.car.course, [Validators.required, acceptOnlyDigits()]);
      this.productionYear = new FormControl(this.car.productionYear);
      this.numberOfSeats = new FormControl(this.car.numberOfSeats);
      this.engineCapacity = new FormControl(this.car.engineCapacity, [Validators.required, acceptOnlyDigits()]);
      this.enginePower = new FormControl(this.car.enginePower, [Validators.required, acceptOnlyDigits()]);
      this.engineType = new FormControl(this.car.engineType);
      this.vehicleCondition = new FormControl(this.car.vehicleCondition, Validators.required);
      this.damaged = new FormControl(this.car.damaged);
      this.price = new FormControl(this.car.price, [Validators.required, acceptOnlyDigits()]);
    } else {
      this.mark = new FormControl(this.EMPTY_STRING, [Validators.required, Validators.minLength(2)]);
      this.model = new FormControl(this.EMPTY_STRING, [Validators.required, Validators.minLength(2)]);
      this.bodyType = new FormControl(this.EMPTY_STRING);
      this.course = new FormControl(this.EMPTY_STRING, [Validators.required, acceptOnlyDigits()]);
      this.productionYear = new FormControl(this.EMPTY_STRING);
      this.numberOfSeats = new FormControl(this.EMPTY_STRING);
      this.engineCapacity = new FormControl(this.EMPTY_STRING, [Validators.required, acceptOnlyDigits()]);
      this.enginePower = new FormControl(this.EMPTY_STRING, [Validators.required, acceptOnlyDigits()]);
      this.engineType = new FormControl(this.EMPTY_STRING);
      this.vehicleCondition = new FormControl(this.EMPTY_STRING, Validators.required);
      this.damaged = new FormControl(this.EMPTY_STRING);
      this.price = new FormControl(this.EMPTY_STRING, [Validators.required, acceptOnlyDigits()]);
    }
  }

  private getProductionYears(): void {
    const currentYear = new Date().getFullYear();
    for (let y = currentYear; y >= this.MIN_PRODUCTION_YEAR; y--) {
      this.productionYears.push(y);
    }
  }
}
