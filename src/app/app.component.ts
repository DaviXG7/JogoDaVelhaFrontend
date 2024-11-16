import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TesteComponent} from './components/teste/teste.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TesteComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jogodavelhafrontend';
  protected readonly console = console;
}
