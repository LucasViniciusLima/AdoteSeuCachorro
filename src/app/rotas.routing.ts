import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroCachorroComponent } from './cadastro-cachorro/cadastro-cachorro.component';
import { CadastroCanilComponent } from './cadastro-canil/cadastro-canil.component';
import { CadastroInteressadoComponent } from './cadastro-interessado/cadastro-interessado.component';
import { MarcarVisitaComponent } from './marcar-visita/marcar-visita.component';

import { ViewDogComponent } from './view-dog/view-dog.component';

const rotas: Routes = [
    {path: '', component: ViewDogComponent},
    {path: 'cadastrocanil', component: CadastroCanilComponent},
    {path: 'cadastrocachorro', component: CadastroCachorroComponent},
    {path: 'marcarvisita', component: MarcarVisitaComponent},
    {path: 'cadastrointeressado', component: CadastroInteressadoComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})
export class RotasModule{  }