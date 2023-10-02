import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "../../../auth/core/services/auth.service";

@Component({
  selector: 'app-home-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-task.component.html',
  styleUrls: ['./home-task.component.scss']
})
export class HomeTaskComponent {

  private authService: AuthService = inject(AuthService);

  onLogoutUser() {
    this.authService.userLogout();
  }
}
