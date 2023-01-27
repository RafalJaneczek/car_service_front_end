import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../auth/service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'cs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(public userSessionService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.isUserLoggedIn = this.userSessionService.isUserLoggedIn();
  }

  public logOut(): void {
    this.userSessionService.logOut();
    this.isUserLoggedIn = false;
    this.router.navigateByUrl('/cars', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/cars']));
  }

}
