import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  standalone: true,
    imports: [FormsModule],
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
  peso: number = 0;
  altura: number = 0;
  imc: string = '0.00';
  classificacao: string = '';

  calcularIMC() {
    if (this.altura > 0 && this.peso > 0) {
      const imcCalculado = this.peso / (this.altura * this.altura);
      this.imc = imcCalculado.toFixed(2);
      this.classificacao = this.classificarIMC(imcCalculado);
    } else {
      this.imc = '0.00';
      this.classificacao = 'Valores inválidos';
    }
  }

  private classificarIMC(imc: number): string {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 24.9) return 'Peso normal';
    if (imc < 29.9) return 'Sobrepeso';
    if (imc < 34.9) return 'Obesidade grau I';
    if (imc < 39.9) return 'Obesidade grau II';
    return 'Obesidade grau III';
  }
}
