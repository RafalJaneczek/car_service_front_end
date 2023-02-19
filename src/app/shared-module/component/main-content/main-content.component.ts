import {Component, OnInit} from '@angular/core';
import {CollapseCommonServiceService} from '../../service/collapse-common-service.service';

@Component({
  selector: 'cs-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.less']
})
export class MainContentComponent implements OnInit {

  isSideBarCollapsed: boolean = false;

  constructor(private collapseCommonServiceService: CollapseCommonServiceService) {}

  ngOnInit(): void {
    this.collapseCommonServiceService.collapseElementEvent.subscribe(() => {
      this.isSideBarCollapsed = !this.isSideBarCollapsed
    });
  }

}
