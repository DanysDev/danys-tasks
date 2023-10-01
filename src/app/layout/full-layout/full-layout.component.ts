import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../header/header.component";
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-full-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent {

}
