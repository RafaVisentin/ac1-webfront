import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperatura',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temperatura.component.html',
  styleUrl: './temperatura.component.css'
})
export class TemperaturaComponent {
  celsius: number = 0;
  fahrenheit: string = '0.00';
  kelvin: string = '0.00';

  converterTemperatura() {
    const fahrenheitCalc = (this.celsius * 9/5) + 32;
    const kelvinCalc = this.celsius + 273.15;

    this.fahrenheit = fahrenheitCalc.toFixed(2);
    this.kelvin = kelvinCalc.toFixed(2);
  }
}

