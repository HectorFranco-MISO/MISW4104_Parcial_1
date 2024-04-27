import { Component, OnInit } from '@angular/core';
import { CafeService } from '../service/cafe.service';
import { Cafe } from '../model/Cafe';

@Component({
  selector: 'app-listar-cafes',
  templateUrl: './listar-cafes.component.html',
  styleUrls: ['./listar-cafes.component.css']
})
export class ListarCafesComponent implements OnInit {

  cafes: Cafe[] = []
  cantidadTipoBlend: number = 0
  cantidadTipoOrigen: number = 0

  constructor(private cafeService: CafeService) {}

  ngOnInit() {
    this.getCafes()
  }

  /**
   * Método que llama al servicio de CafeService
   * y pobla el atributo cafes con la data extraida del endpoint
   */
  getCafes(): void {
    this.cafeService.getAllCafes().subscribe((cafes: Cafe[]) => {
      this.cafes = cafes
      this.getCantidadTiposCafe()
    })
  }

  /**
   * Método que hace el conteo de tipos de cafe con base
   * a la data obtenida en el arreglo cafes[]
   */
  getCantidadTiposCafe() {
    this.cafes.forEach((cafe: Cafe) => cafe.tipo === 'Blend' ? this.cantidadTipoBlend++ : this.cantidadTipoOrigen++);
  }

}
