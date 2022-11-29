import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Caracteristicas } from '../models/caracteristicas.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../models/usuarios.model';
import { SessionStorageService } from 'ngx-webstorage';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = environment.url;

  constructor(private http: HttpClient, private storage: SessionStorageService) { }

  /**
* login
* @param formData
* @returns 
*/
  login(formData: FormData):Observable<any> {
    let dir = this.url + 'login'
    return this.http.post(dir, formData);
  }

  /**
* login
* @param formData con id usuario
* @param token
* @returns 
*/
  logout(formData: FormData):Observable<any> {
    formData.append('token', this.storage.retrieve('usuario').token);
    let dir = this.url + 'logout'
    return this.http.post(dir, formData);
  }

  /**
 * carga los datos de los sistema desde bd
 * @param no
 * @returns 
 */
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

  /**
* carga los datos de los usuarios desde bd.
* @param no
* @returns usuarios DB
*/
  get_usuarios_datos(): Observable<Usuarios[]> {
    let dir = this.url + 'usuarios';
    return this.http.get<Usuarios[]>(dir);
  }



}
