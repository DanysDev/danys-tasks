import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, ReactiveFormsModule, UntypedFormGroup, Validators} from "@angular/forms";
import {User} from "../../core/interfaces/user.interface";
import {AuthService} from "../../core/services/auth.service";
import {Router} from "@angular/router";
import {confirmPasswordValidator} from "../../core/clases/confirm-password-validator";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private formBuilder: FormBuilder = inject(FormBuilder);
  private authService: AuthService  = inject(AuthService);
  private router: Router = inject(Router);

  public hide: boolean = true;
  public form!: UntypedFormGroup;


  private createForm() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      avatar: ['https://api.lorem.space/image/face?w=640&h=480&r=867'],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(6)]],
    },
      {
        validators: confirmPasswordValidator
      })
  }

  public getErrorMessage() {
    if (this.form.controls['email'].hasError('required')) {
      return 'Debe agregar un email';
    }

    return this.form.controls['email'].hasError('email') ? 'Email no válido' : '';
  }

  public sendDataUser() {
    const dataUser: User = this.form.value;
    console.log(dataUser);
  }

  protected onUserRegister() {
    this.authService.setUser(this.form.value).subscribe((user) => {
      console.log(user);
      this.form.reset();
      this.router.navigate(['/auth/login']).then();
    });
  }

  ngOnInit(): void {
    this.createForm();
  }
}
