import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../service/car.service';
import {Car} from '../../model/car';
import {ActivatedRoute, Router} from '@angular/router';
import {CarFixture} from '../../utils/car-fixture';
import {VehicleFixture} from '../../../utils/vehicle-fixture';
import {acceptOnlyDigits} from '../../../validators';
import {VehicleUtils} from '../../../utils/Vehicle-utils';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.less']
})
export class CarFormComponent implements OnInit {

  carForm: FormGroup;

  @Input()
  car: Car;

  @Input()
  isEditForm: boolean;

  bodyTypes: Map<string, string> = CarFixture.bodyTypes;
  engineTypes: Map<string, string> = CarFixture.engineTypes;
  conditionStatuses: Map<string, string> = VehicleFixture.condition;
  damageStatuses: Map<boolean, string> = VehicleFixture.isDamaged;
  numberOfSeatsArray: number[] = CarFixture.numberOfSeatsArray;
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

  private readonly EMPTY_STRING = '';

  constructor(private carsService: CarService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.setProductionYears();
    this.createControls();
    this.createForm();
  }

  addCar(): void {
    this.carsService.add(this.carForm.value).subscribe(() => {
      this.createControls();
    });
  }

  updateCar(): void {
    this.carsService.update(this.car.id, this.carForm.value).subscribe(() => {
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
    if (this.isEditForm) {
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

  private setProductionYears(): void {
    this.productionYears = VehicleUtils.getProductionYears();
  }

}
