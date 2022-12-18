import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Motorcycle} from "../model/motorcycle";
import {CarFixture} from "../../car/utils/car-fixture";
import {VehicleFixture} from "../../utils/vehicle-fixture";
import {MotorcycleFixture} from "../utils/motorcycle-fixture";
import {VehicleUtils} from "../../utils/Vehicle-utils";
import {acceptOnlyDigits} from "../../validators";
import {MotorcycleService} from "../service/motorcycle.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-motorcycle-form',
  templateUrl: './motorcycle-form.component.html',
  styleUrls: ['./motorcycle-form.component.less']
})
export class MotorcycleFormComponent implements OnInit {

  motorcycleForm: FormGroup;

  @Input()
  motorcycle: Motorcycle;

  @Input()
  isUpdateForm: boolean = false;

  types: Map<string, string> = MotorcycleFixture.types;
  engineTypes: Map<string, string> = CarFixture.engineTypes;
  conditionStatuses: Map<string, string> = VehicleFixture.condition;
  damageStatuses: Map<boolean, string> = VehicleFixture.isDamaged;
  productionYears: number[] = [];

  mark: FormControl;
  model: FormControl;
  type: FormControl;
  course: FormControl;
  productionYear: FormControl;
  engineCapacity: FormControl;
  enginePower: FormControl;
  engineType: FormControl;
  vehicleCondition: FormControl;
  damaged: FormControl;
  price: FormControl;

  private readonly EMPTY_STRING = '';

  constructor(private motorcycleService: MotorcycleService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.setProductionYears();
    this.createControls();
    this.createForm();
  }

  addMotorcycle(): void {
    this.motorcycleService.add(this.motorcycleForm.value).subscribe(() => {
      this.createControls();
    });
  }

  updateMotorcycle(): void {
    this.motorcycleService.update(this.motorcycle.id, this.motorcycleForm.value).subscribe(() => {
      this.router.navigate(['/motorcycles']);
    });
  }

  private createForm(): void {
    this.motorcycleForm = new FormGroup({
      mark: this.mark,
      model: this.model,
      type: this.type,
      course: this.course,
      productionYear: this.productionYear,
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
      this.mark = new FormControl(this.motorcycle.mark, [Validators.required, Validators.minLength(2)]);
      this.model = new FormControl(this.motorcycle.model, [Validators.required, Validators.minLength(2)]);
      this.type = new FormControl(this.motorcycle.type);
      this.course = new FormControl(this.motorcycle.course, [Validators.required, acceptOnlyDigits()]);
      this.productionYear = new FormControl(this.motorcycle.productionYear);
      this.engineCapacity = new FormControl(this.motorcycle.engineCapacity, [Validators.required, acceptOnlyDigits()]);
      this.enginePower = new FormControl(this.motorcycle.enginePower, [Validators.required, acceptOnlyDigits()]);
      this.engineType = new FormControl(this.motorcycle.engineType);
      this.vehicleCondition = new FormControl(this.motorcycle.vehicleCondition, Validators.required);
      this.damaged = new FormControl(this.motorcycle.damaged);
      this.price = new FormControl(this.motorcycle.price, [Validators.required, acceptOnlyDigits()]);
    } else {
      this.mark = new FormControl(this.EMPTY_STRING, [Validators.required, Validators.minLength(2)]);
      this.model = new FormControl(this.EMPTY_STRING, [Validators.required, Validators.minLength(2)]);
      this.type = new FormControl(this.EMPTY_STRING);
      this.course = new FormControl(this.EMPTY_STRING, [Validators.required, acceptOnlyDigits()]);
      this.productionYear = new FormControl(this.EMPTY_STRING);
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
