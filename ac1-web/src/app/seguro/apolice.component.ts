import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent {
  nome: string = '';
  sexo: string = 'masculino'; // Valor padrão
  idade: number = 0;
  valorAutomovel: number = 0;
  valorApolice: string = '0.00';

  calcularApolice() {
    let percentual = 0;

    if (this.sexo === 'masculino') {
      percentual = this.idade <= 25 ? 0.15 : 0.10;
    } else {
      percentual = 0.08;
    }

    this.valorApolice = (this.valorAutomovel * percentual).toFixed(2);
  }
}
