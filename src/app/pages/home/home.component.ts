import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {AuthService} from "../auth/core/services/auth.service";
import {User} from "../auth/core/interfaces/user.interface";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private authService: AuthService = inject(AuthService);

  public userData: User =
    {
      email: '',
      password: '',
      name: '',
      id: 0
    };

  getDataUser() {
    this.authService.getLoginUserWithSeccion().subscribe((data) => {
      this.userData = data;
      console.log(data);
    })
  }

  onLogoutUser() {
    this.authService.userLogout();
  }
}
