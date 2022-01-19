import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.scss']
})
export class CadastrarProdutosComponent implements OnInit {


@Input() title: any;
@Input() data: any;
@Input() money: any; 




  constructor() { }

  ngOnInit(): void {
  }

}
