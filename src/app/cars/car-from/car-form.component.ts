import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CarsService} from '../cars.service';
import {Car} from '../models/car';
import {Router} from '@angular/router';
import {CarUtils} from '../utils/car-utils';
import {VehicleUtils} from '../utils/vehicle-utils';
import {onlyDigitsValidator} from '../validators';

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
      this.bodyType = new FormControl(this.car.bodyType, Validators.required);
      this.course = new FormControl(this.car.course, [Validators.required, onlyDigitsValidator()]);
      this.productionYear = new FormControl(this.car.productionYear, Validators.required);
      this.numberOfSeats = new FormControl(this.car.numberOfSeats, Validators.required);
      this.engineCapacity = new FormControl(this.car.engineCapacity, [Validators.required, onlyDigitsValidator()]);
      this.enginePower = new FormControl(this.car.enginePower, [Validators.required, onlyDigitsValidator()]);
      this.engineType = new FormControl(this.car.engineType, Validators.required);
      this.vehicleCondition = new FormControl(this.car.vehicleCondition, Validators.required);
      this.damaged = new FormControl(this.car.damaged, Validators.required);
      this.price = new FormControl(this.car.price, [Validators.required, onlyDigitsValidator()]);
    } else {
      this.mark = new FormControl(this.EMPTY_STRING, [Validators.required, Validators.minLength(2)]);
      this.model = new FormControl(this.EMPTY_STRING, [Validators.required, Validators.minLength(2)]);
      this.bodyType = new FormControl(this.EMPTY_STRING, Validators.required);
      this.course = new FormControl(this.EMPTY_STRING, [Validators.required, onlyDigitsValidator()]);
      this.productionYear = new FormControl(this.EMPTY_STRING, Validators.required);
      this.numberOfSeats = new FormControl(this.EMPTY_STRING, Validators.required);
      this.engineCapacity = new FormControl(this.EMPTY_STRING, [Validators.required, onlyDigitsValidator()]);
      this.enginePower = new FormControl(this.EMPTY_STRING, [Validators.required, onlyDigitsValidator()]);
      this.engineType = new FormControl(this.EMPTY_STRING, Validators.required);
      this.vehicleCondition = new FormControl(this.EMPTY_STRING, Validators.required);
      this.damaged = new FormControl(this.EMPTY_STRING, Validators.required);
      this.price = new FormControl(this.EMPTY_STRING, [Validators.required, onlyDigitsValidator()]);
    }
  }

  private getProductionYears(): void {
    const currentYear = new Date().getFullYear();
    for (let y = currentYear; y >= this.MIN_PRODUCTION_YEAR; y--) {
      this.productionYears.push(y);
    }
  }
}
