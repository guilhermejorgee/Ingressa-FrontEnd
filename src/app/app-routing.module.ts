import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { MinhasPostagensComponent } from './minhas-postagens/minhas-postagens.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { VagasComponent } from './vagas/vagas.component';

const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch: 'full'},

  {path:'inicio', component: InicioComponent},
  {path:'contato', component: ContatoComponent},
  {path:'sobrenos', component: SobreNosComponent},
  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component:CadastrarComponent},
  {path:'vagas', component:VagasComponent},
  {path: 'minhas-postagens', component: MinhasPostagensComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
