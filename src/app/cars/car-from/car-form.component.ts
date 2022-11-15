import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CarsService} from '../cars.service';
import {Car} from '../models/car';
import {Router} from '@angular/router';
import {CarUtils} from '../utils/car-utils';
import {VehicleUtils} from '../utils/vehicle-utils';

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
  condition: Map<string, string> = VehicleUtils.condition;
  damaged: Map<boolean, string> = VehicleUtils.isDamaged;
  numberOfSeatsArray: number[] = CarUtils.numberOfSeatsArray;
  productionYears: number[] = [];

  readonly MIN_PRODUCTION_YEAR: number = 1900;
  readonly ONLY_DIGITS_REGEX = '^[0-9]*$';

  constructor(private carsService: CarsService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getProductionYears();
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
        mark: [this.car.mark, [Validators.required, Validators.minLength(2)]],
        model: [this.car.model, [Validators.required, Validators.minLength(2)]],
        bodyType: [this.car.bodyType, Validators.required],
        course: [this.car.course, [Validators.required, Validators.pattern(this.ONLY_DIGITS_REGEX)]],
        productionYear: [this.car.productionYear, Validators.required],
        numberOfSeats: [this.car.numberOfSeats, Validators.required],
        engineCapacity: [this.car.engineCapacity, [Validators.required, Validators.pattern(this.ONLY_DIGITS_REGEX)]],
        enginePower: [this.car.enginePower, [Validators.required, Validators.pattern(this.ONLY_DIGITS_REGEX)]],
        engineType: [this.car.engineType, Validators.required],
        vehicleCondition: [this.car.vehicleCondition, Validators.required],
        damaged: [this.car.damaged, Validators.required],
        price: [this.car.price, [Validators.required, Validators.pattern(this.ONLY_DIGITS_REGEX)]]
      });
    } else {
      return this.formBuilder.group({
        mark: ['', [Validators.required, Validators.minLength(2)]],
        model: ['', [Validators.required, Validators.minLength(2)]],
        bodyType: ['', Validators.required],
        course: ['', [Validators.required, Validators.pattern(this.ONLY_DIGITS_REGEX)]],
        productionYear: ['', Validators.required],
        numberOfSeats: ['', Validators.required],
        engineCapacity: ['', [Validators.required, Validators.pattern(this.ONLY_DIGITS_REGEX)]],
        enginePower: ['', [Validators.required, Validators.pattern(this.ONLY_DIGITS_REGEX)]],
        engineType: ['', Validators.required],
        vehicleCondition: ['', Validators.required],
        damaged: ['', Validators.required],
        price: ['', [Validators.required, Validators.pattern(this.ONLY_DIGITS_REGEX)]]
      });
    }
  }

  private getProductionYears(): void {
    const currentYear = new Date().getFullYear();
    for (let y = currentYear; y >= this.MIN_PRODUCTION_YEAR; y--) {
      this.productionYears.push(y);
    }
  }
}
