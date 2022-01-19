import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarProdutosComponent } from './compoentes/cadastrar-produtos/cadastrar-produtos.component';



@NgModule({
  declarations: [
    CadastrarProdutosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CadastrarProdutosComponent
  ]
})
export class SharedModule { }
