import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";
import {NgxCollapseModule} from "ngx-collapse";
import {NgxPermissionsModule} from "ngx-permissions";


@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        NgxCollapseModule,
        NgxPermissionsModule
    ]
})
export class CoreModule {
}
