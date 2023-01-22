import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SurnameShortcutPipe} from './pipes/surname-shortcut.pipe';
import {ImportantDirective} from './directives/important.directive';
import {MainContentComponent} from './main-content/main-content.component';
import {RouterModule} from '@angular/router';
import {CoreModule} from '../core-module/core-module';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
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
    MainContentComponent
  ]
})
export class SharedModule {
}
