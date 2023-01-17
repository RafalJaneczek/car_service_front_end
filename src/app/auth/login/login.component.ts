import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {UserSessionService} from '../service/user-session.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'cs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  errorMessage = '';
  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private authService: AuthService,
              private userSessionService: UserSessionService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.createControls();
    this.createForm();
  }

  login(): void {
    this.authService.login(this.loginForm.value).subscribe(
      response => {
        console.log(response);
        this.userSessionService.saveToken(response.token);
        this.userSessionService.saveUser(response);
        this.router.navigate(['/cars']);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  private createForm(): void {
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  private createControls(): void {
    this.username = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
  }

}
