import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuSuperiorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula3';
}
