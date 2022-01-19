import { Injectable} from '@angular/core';
import { environment } from './../../../../../pipes/src/environments/environment';

import { EMPTY,Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


import {HttpClient} from '@angular/common/http';

import {IProdutos} from '../model/IProdutos';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

   private url: string = environment.URL;


  constructor(

    private httpClient: HttpClient,
    private toastr: ToastrService

    ) { }

// MÉTODO  QUE EXIBE OS PRODUTOS DO BANCO DE DADOS
pegaTudao(): Observable<IProdutos[]>{
   return this.httpClient.get<IProdutos[]>(this.url).pipe(
     map(retorno => retorno),
     catchError(erro => this.exibeErro(erro))
   );
}



//MÉTODO  QUE  CADASTRA  UM PRODUTO
cadastrarProduto(produto: IProdutos): Observable<IProdutos>{

  return this.httpClient.post<IProdutos>(this.url,produto).pipe(
     map(retorno => retorno),
     catchError(erro => this.exibeErro(erro))
   );

}


// MÉTODO  BUSCA OS DADOS PARA ATUALIZAR UM PRODUTO
apresentaProduto(id: number): Observable<IProdutos>{

  return this.httpClient.get<IProdutos>(`${this.url}/${id}`).pipe(
    map(retorno => retorno),
    catchError(erro => this.exibeErro(erro))
  );

}



//MÉTODO  QUE  ATUALIZA  UM PRODUTO

atualizarProduto(produto: IProdutos): Observable<IProdutos>{

  return this.httpClient.put<IProdutos>(`${this.url}/${produto.id}`,produto).pipe(
     map(retorno => retorno),
     catchError(erro => this.exibeErro(erro))
   );

}







//MÉTODO  QUE  DELETA  UM PRODUTO
deletarProduto(id: any): Observable<any>{

  return this.httpClient.delete<any>(`${this.url}/${id}`).pipe(
     map(retorno => retorno),
     catchError(erro => this.exibeErro(erro))
   );

}














// EXIBE MENSAGENS NA TELA
exibeErro(e: any): Observable<any>{
  this.exibirMensagens(`ERRO !!!`,`Não foi possível realizar a esta operação !`,`toast-error`);
  return EMPTY;
}




exibirMensagens(titulo: string,mensagem: string , tipo:string): void{
  this.toastr.show(mensagem,titulo,{closeButton:true,progressBar: true},tipo);
}








}
