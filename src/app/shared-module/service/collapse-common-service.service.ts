import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollapseCommonServiceService {

  @Output()
  collapseElementEvent = new EventEmitter<void>();

  constructor() {}

  public collapseSideBar(): void {
    this.collapseElementEvent.emit();
  }

}
