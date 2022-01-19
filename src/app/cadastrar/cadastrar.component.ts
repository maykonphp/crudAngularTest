import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ProdutosService } from '../services/produtos.service';
import  {IProdutos } from '../model/IProdutos';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

produto: IProdutos = {

   nome:  '',
   validade: null,
   preco: null
}

  constructor(
    private  produtosService: ProdutosService,
    private router : Router
    ) { }


  ngOnInit(): void {
  }


cheiroDeVeia(): void{
 this.produtosService.cadastrarProduto(this.produto).subscribe(retorno =>{
     this.produto = retorno;
     this.produtosService.exibirMensagens('SISTEMA',`${this.produto.nome} foi cadastrado com sucesso ID: ${this.produto.id}`,`toast-success`);
 });
  this.router.navigate(['/produtos']);

}



}
