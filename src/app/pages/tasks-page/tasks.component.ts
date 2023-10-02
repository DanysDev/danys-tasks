import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet />',
})
export class TasksComponent {

}