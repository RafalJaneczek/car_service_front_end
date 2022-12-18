import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MotorcycleService} from "../service/motorcycle.service";
import {Router} from "@angular/router";
import {Motorcycle} from "../model/motorcycle";

@Component({
  selector: 'cs-motorcycles-list',
  templateUrl: './motorcycles-list.component.html',
  styleUrls: ['./motorcycles-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class MotorcyclesListComponent implements OnInit {

  motorcycles: Motorcycle[];

  constructor(private motorcyclesService: MotorcycleService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadMotorcycles();
  }

  public removeMotorcycle(motorcycle: Motorcycle, event: Event) {
    event.stopPropagation();
    this.motorcyclesService.remove(motorcycle.id).subscribe(() => {
      this.loadMotorcycles();
    })
  }

  private loadMotorcycles(): void {
    this.motorcyclesService.findAll().subscribe((motorcycles) => {
      this.motorcycles = motorcycles;
    })
  }

  public goToMotorcycleDetails(motorcycle: Motorcycle) {
    this.router.navigate(['/motorcycles', motorcycle.id]);
  }

}
