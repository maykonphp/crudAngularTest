import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProdutosComponent} from  './produtos/produtos.component';
import {HomeComponent} from './home/home.component';
import {CadastrarComponent} from './cadastrar/cadastrar.component';
import { AtualizarProdutoComponent } from './atualizar-produto/atualizar-produto.component';


const routes: Routes = [
  {path:'produtos',component: ProdutosComponent},
  {path:'home',component:HomeComponent},
  {path:'cadastrar',component:CadastrarComponent},
  {path:'update/:id',component: AtualizarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
