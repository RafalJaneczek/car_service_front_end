import {Component, OnInit} from '@angular/core';
import {UserSessionService} from '../../auth/service/user-session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'cs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(public userSessionService: UserSessionService, private router: Router) {}

  ngOnInit(): void {
    this.isUserLoggedIn = this.userSessionService.isUserLoggedIn();
  }

  public logOut(): void {
    this.userSessionService.logOut();
    this.router.navigateByUrl('/cars', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/cars']));
  }

}
