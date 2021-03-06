import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewDogComponent } from './view-dog/view-dog.component';
import { CadastroCanilComponent } from './cadastro-canil/cadastro-canil.component';
import { CadastroInteressadoComponent } from './cadastro-interessado/cadastro-interessado.component';
import { CadastroCachorroComponent } from './cadastro-cachorro/cadastro-cachorro.component';
import { MarcarVisitaComponent } from './marcar-visita/marcar-visita.component';
import { RotasModule } from './rotas.routing';
import { ViewTemplateComponent } from './view-template/view-template.component';
import { MyAccountComponent } from './my-account/my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewDogComponent,
    CadastroCanilComponent,
    CadastroInteressadoComponent,
    CadastroCachorroComponent,
    MarcarVisitaComponent,
    ViewTemplateComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    RotasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
