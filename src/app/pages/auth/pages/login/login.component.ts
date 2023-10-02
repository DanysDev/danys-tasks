import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatInputModule, ReactiveFormsModule, MatIconModule, NgOptimizedImage, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  private formBuilder: FormBuilder = inject(FormBuilder);
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  public hide: boolean = true;
  public form!: FormGroup;


  public email: FormControl <string | null> = new FormControl('', [Validators.required, Validators.email]);
  protected password: FormControl <string | null> = new FormControl('', [Validators.required, Validators.minLength(6)]);

  private createForm() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    })
  }

  onUserLogin() {
    this.authService.getloginUser(this.form.value).subscribe((data) => {
      console.log(data);
      this.form.reset();
      localStorage.setItem('token', <string>data.access_token);
      this.router.navigate(['/']).then();
    })
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  sendForm() {
    const body = {
      email: this.email.value,
      password: this.password.value
    }
    console.log('datos del body: ', body);
  }

  ngOnInit(): void {
    this.createForm();
  }

}
