import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Caracteristicas } from '../models/caracteristicas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:9608/apis/'

  constructor(private http: HttpClient) { }

  get_caracteristicas(): Observable<Caracteristicas[]> {
    let dir = this.url + 'sistema';
    return this.http.get<Caracteristicas[]>(dir)
  }

  /**
   * Actualiza los datos de un sistema
   * @param id del sistema
   * @param formData datos actualizados
   * @returns 
   */
  update_caracteristicas(id: number, formData: FormData) {
    let dir = this.url + 'sistema/' + id;
    return this.http.put(dir, formData);
  }

    /**
   * Agrega un nuevo sistema a la bd
   * @param formData datos del sistema
   * @returns 
   */
     add_caracteristicas(formData: FormData) {
      let dir = this.url + 'sistema';
      return this.http.post(dir, formData);
    }

}
