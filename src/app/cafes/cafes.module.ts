import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCafesComponent } from './listar-cafes/listar-cafes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ListarCafesComponent],
  exports: [ListarCafesComponent]
})
export class CafesModule { }
