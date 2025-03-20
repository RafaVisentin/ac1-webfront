import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MediaSimplesComponent } from './media-simples/media-simples.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { TelaFilho1Component } from './tela-filho1/tela-filho1.component';
import { TelaFilho2Component } from './tela-filho2/tela-filho2.component';
import { TemperaturaComponent } from './conversor_temp/temperatura.component';
import { ApoliceComponent } from './seguro/apolice.component';
import { ImcComponent } from './imc/imc.component';

export const routes: Routes = [
    { path: '', redirectTo: 'calculadora', pathMatch: 'full' },
    { path: 'calculadora', component: CalculadoraComponent },
    { path: 'media-simples', component: MediaSimplesComponent },
    { path: 'app-temperatura', component: TemperaturaComponent },
    { path: 'app-apolice', component: ApoliceComponent },
    { path: 'app-imc', component: ImcComponent },
    {
        path: 'tela-pai', component: TelaPaiComponent,
        children: [
            { path: 'tela-filho1', component: TelaFilho1Component },
            { path: 'tela-filho2', component: TelaFilho2Component }
        ]
    },
    { path: '**', component: PaginaNaoEncontradaComponent }
];
