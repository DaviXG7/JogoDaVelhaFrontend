import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import { ButtonModule } from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {CalendarModule} from 'primeng/calendar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe, NgIf, NgOptimizedImage, NgStyle} from '@angular/common';
import {ToolbarModule} from 'primeng/toolbar';
import {AvatarModule} from 'primeng/avatar';
import {DividerModule} from 'primeng/divider';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, RouterOutlet, RouterLink, Ripple, CalendarModule, ReactiveFormsModule, NgOptimizedImage, NgStyle, ToolbarModule, AvatarModule, DividerModule, FormsModule, NgIf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'jogodavelhafrontend';
  isDark: boolean = false;

  constructor(protected authService: AuthService, private router: Router) {

  }

  toggleDark() {
    document.documentElement.classList.toggle(
      'dark',
    )
    this.isDark = !this.isDark;
  }

  ngOnInit(): void {
    this.authService.validateToken();
  }
}
