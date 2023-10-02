import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../pages/auth/core/services/auth.service";
import {User} from "../../pages/auth/core/interfaces/user.interface";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatInputModule, MatIconModule, RouterLink, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  @ViewChild('currentTask') currentTask!: ElementRef;

  public isUserLogueIn: boolean = false;
  public userData: User =
    {
      email: '',
      password: '',
      name: '',
      id: 0
    };

  private checkUser(){
    this.authService.isUserLoguin().subscribe((value) => {
      this.isUserLogueIn = value;
    })
  }

  private dataUser() {
    this.authService.getLoginUserWithSeccion().subscribe((data) => {
      this.userData = data;
    })
  }

  public onAuthRedirect(id: number) {
    if (id === 1) {
      this.router.navigate(['/auth/login']).then();
    }
    if (id === 2) {
      this.router.navigate(['/auth/register']).then();
    }
  }

  onSearchTask(task: string){
    if (task !== '') {
      console.log('Tarea a buscar: ', task);
      this.currentTask.nativeElement.value = '';
    }
    return null;
  }

  ngOnInit(): void {
    this.checkUser();
    if (this.isUserLogueIn) {
      this.dataUser();
    }
    console.log(this.isUserLogueIn);
  }

}
