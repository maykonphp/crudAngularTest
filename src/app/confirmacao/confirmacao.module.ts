import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTestComponent } from './card-test/card-test.component';



@NgModule({
  declarations: [
    CardTestComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardTestComponent
  ]
})
export class ConfirmacaoModule { }
