import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {UserService} from '../../service/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {JwtResponse} from '../../model/JwtResponse';

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
  error: boolean;

  constructor(private authService: AuthService,
              private userSessionService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.createControls();
    this.createForm();
  }

  public login(): void {
    this.authService.login(this.loginForm.value).subscribe(
      response => {
            const body: JwtResponse = response;
            this.userSessionService.saveToken(body.token);
            this.userSessionService.saveUser(body);
            this.authService.loadUserPermissions(body.roles);
            this.router.navigate(['/cars']);
      },
      err => {
        this.error = true;
        this.errorMessage = 'Incorrect login or password!';
      }
    );
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
