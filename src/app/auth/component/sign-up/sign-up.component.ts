import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'cs-register',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  username: FormControl;
  email: FormControl;
  password: FormControl;
  success: boolean;
  warning: boolean;
  error: boolean;
  responseMsg: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.createControls();
    this.createForm();
  }

  private createForm(): void {
    this.signUpForm = new FormGroup({
      username: this.username,
      email: this.email,
      password: this.password
    });
  }

  private createControls(): void {
    this.username = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
  }

  public onSubmit(): void {
    this.authService.signup(this.signUpForm.value).subscribe(
      response => {
        this.success = true;
        this.responseMsg = response.message;
      },
      err => {
        this.error = true;
        this.responseMsg = err.error.message;
      }
    )
  }

  private clearStatuses(): void {
    this.success = false;
    this.warning = false;
    this.error = false;
  }

}
