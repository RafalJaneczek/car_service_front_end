import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './component/header/header.component';
import {SurnameShortcutPipe} from './pipes/surname-shortcut.pipe';
import {ImportantDirective} from './directives/important.directive';
import {MainContentComponent} from './component/main-content/main-content.component';
import {RouterModule} from '@angular/router';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {NgxCollapseModule} from 'ngx-collapse';
import {NgxPermissionsModule} from 'ngx-permissions';
import {CircleProgressComponent} from './component/progress-circle/circle-progress.component';
import {NgCircleProgressModule} from 'ng-circle-progress';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxCollapseModule,
    NgxPermissionsModule,
    NgCircleProgressModule
  ],
  exports: [
    HeaderComponent,
    SurnameShortcutPipe,
    ImportantDirective,
    MainContentComponent,
    CircleProgressComponent
  ],
  declarations: [
    HeaderComponent,
    SurnameShortcutPipe,
    ImportantDirective,
    MainContentComponent,
    SidebarComponent,
    CircleProgressComponent
  ]
})
export class SharedModule {
}
