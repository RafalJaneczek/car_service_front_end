import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './component/header/header.component';
import {SurnameShortcutPipe} from './pipes/surname-shortcut.pipe';
import {ImportantDirective} from './directives/important.directive';
import {MainContentComponent} from './component/main-content/main-content.component';
import {RouterModule} from '@angular/router';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {NgxCollapseModule} from 'ngx-collapse';
import {NgxPermissionsModule} from "ngx-permissions";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxCollapseModule,
    NgxPermissionsModule
  ],
  exports: [
    HeaderComponent,
    SurnameShortcutPipe,
    ImportantDirective,
    MainContentComponent
  ],
  declarations: [
    HeaderComponent,
    SurnameShortcutPipe,
    ImportantDirective,
    MainContentComponent,
    SidebarComponent
  ]
})
export class SharedModule {
}
