import {inject, Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment.dev";
import {User} from "../interfaces/user.interface";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http: HttpClient = inject(HttpClient);
  private router: Router = inject(Router);

  /* EndPoints */
  public createUser: string = environment.apiUrl + 'users';
  public loginUser: string = environment.apiUrl + 'auth/login/';
  public loginUserSeccion: string = environment.apiUrl + 'auth/profile/';


  /**
   * Establece el usuario proporcionado y realiza una solicitud HTTP para crear el usuario en el servidor.
   *
   * @param {User} user - El usuario que se va a establecer.
   * @return {Observable<User>} El observable que emite el usuario creado.
   */
  public setUser(user: User): Observable<User> {
    return this.http.post<User>(this.createUser, user);
  }


  /**
   * Obtiene el usuario que inició sesión.
   *
   * @param {User} user - El usuario que se va a autenticar.
   * @return {Observable<User>} El usuario autenticado.
   */
  public getloginUser(user: User): Observable<User> {
    return this.http.post<User>(this.loginUser, user);
  }


  /**
   * Obtiene el usuario que inició sesión con su sección.
   *
   * @return {Observable<User>} - Un observable que emite el objeto de usuario autenticado.
   */
  getLoginUserWithSeccion(): Observable<User> {
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    return this.http.get<User>(this.loginUserSeccion, {headers});
  }


  /**
   * Verifica si el usuario ha iniciado sesión.
   *
   * @return {boolean} Retorna true si el usuario ha iniciado sesión, de lo contrario retorna false.
   */
  isUserLoguin(): boolean {
    return !!localStorage.getItem('token');
  }


  /**
   * Cierra la sesión del usuario.
   */
  userLogout(): void {
    localStorage.removeItem('token');
    const currentUrl = this.router.url;
    if (currentUrl !== '/home') {
      this.router.navigateByUrl('/home').then();
    }
  }
}
