
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  operacao: string = 'soma'; // Operação padrão
  resultado: string = '0.00';

  calcular() {
    let resultadoCalc: number;

    switch (this.operacao) {
      case 'soma':
        resultadoCalc = this.numero1 + this.numero2;
        break;
      case 'subtracao':
        resultadoCalc = this.numero1 - this.numero2;
        break;
      case 'multiplicacao':
        resultadoCalc = this.numero1 * this.numero2;
        break;
      case 'divisao':
        if (this.numero2 !== 0) {
          resultadoCalc = this.numero1 / this.numero2;
        } else {
          this.resultado = 'Erro: Divisão por zero';
          return;
        }
        break;
      default:
        this.resultado = 'Operação inválida';
        return;
    }

    this.resultado = resultadoCalc.toFixed(2);
  }
}
