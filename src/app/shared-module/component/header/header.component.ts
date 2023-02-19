import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../auth/service/user.service';
import {Router} from '@angular/router';
import {CollapseCommonServiceService} from '../../service/collapse-common-service.service';

@Component({
  selector: 'cs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(
    private userSessionService: UserService,
    private router: Router,
    private collapseCommonServiceService: CollapseCommonServiceService) {}

  ngOnInit(): void {
    this.isUserLoggedIn = this.userSessionService.isUserLoggedIn();
  }

  public logOut(): void {
    this.userSessionService.logOut();
    this.isUserLoggedIn = false;
    this.router.navigateByUrl('/cars', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/cars']));
  }

  public toggleSideBar(): void {
    this.collapseCommonServiceService.collapseSideBar();
  }

}
