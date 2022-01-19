import { Component, OnInit } from '@angular/core';
import { IProdutos } from '../model/IProdutos';

import { ProdutosService } from './../services/produtos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.scss']
})
export class AtualizarProdutoComponent implements OnInit {

produto: IProdutos = {
     nome: '',
     validade: null,
     preco: null
}
constructor(
    private produtoService:  ProdutosService,
    private router: Router,
    private activateRouter: ActivatedRoute
) { }




ngOnInit(): void {

   const  id = Number(this.activateRouter.snapshot.paramMap.get('id'));
   this.produtoService.apresentaProduto(id).subscribe(retorno => {
      this.produto = retorno;
   });

}



updateProduto(){
   this.produtoService.atualizarProduto(this.produto).subscribe(retorno =>{
      this.produto = retorno;
      this.produtoService.exibirMensagens(`SISTEMA`,`O produto ${this.produto.nome} foi atualizado com sucesso !`,`toast-success`);
      this.router.navigate(['/produtos']);
   });
}





}
