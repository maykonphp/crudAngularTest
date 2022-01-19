import { Component, OnInit } from '@angular/core';



import {ProdutosService } from '../services/produtos.service';
import  {IProdutos } from '../model/IProdutos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  listaProdutos: IProdutos[] = [
    // {id:1 ,curso:'angular',validade:'2021-12-31',valor:589.99},
    // {id:2 ,curso:'html5',validade:'2021-12-31',valor:389.99},
    // {id:3 ,curso:'javascript',validade:'2021-12-31',valor:455.99},
    // {id:4 ,curso:'php',validade:'2021-12-31'},
    // {id:5 ,curso:'css3',validade:'2021-12-31'},
    // {id:6 ,curso:'.net',validade:'2021-12-31'},
    // {id:7 ,curso:'nodejs',validade:'2021-12-31'},
    // {id:8 ,curso:'python',validade:'2021-12-31'},
    // {id:9 ,curso:'jquery',validade:'2021-12-31'}
  ];



  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.exibeTudao();
  }



  // MÉTODO QUE EXIBE OS PRODUTOS CADASTRADOS
exibeTudao(): void{
    this.produtosService.pegaTudao().subscribe(data => {
        this.listaProdutos = data;
    });
}




// MÉTODO QUE RECEBE A CONFIRMAÇÃO E DELETA UM PRODUTO
deleteOk(produto: IProdutos): void{

this.produtosService.deletarProduto(produto.id).subscribe(()=>{
     this.produtosService.exibirMensagens(
       `SISTEMA`,`${produto.nome} foi excluido com sucesso !`,`toast-success`
     );
     this.exibeTudao();

});





}













}
