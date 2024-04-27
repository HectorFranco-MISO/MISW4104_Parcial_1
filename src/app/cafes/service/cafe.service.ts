import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cafe } from '../model/Cafe';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private apiUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  /**
   * Endpoint que retorna la lista de Cafés del endpoint apiUrl
   * @returns Observable<Cafe[]> con la lista de Cafés del endpoint
   */
  getAllCafes(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.apiUrl)
  }

}
