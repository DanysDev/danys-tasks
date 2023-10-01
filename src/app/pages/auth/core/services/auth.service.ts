import {inject, Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment.dev";
import {User} from "../interfaces/user.interface";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http: HttpClient = inject(HttpClient);

  /* EndPoints */
  public createUser: string = environment.apiUrl + 'users';
  public loginUser: string = environment.apiUrl + 'auth/login/';
  public loginUserSeccion: string = environment.apiUrl + 'auth/profile/';


  /**
   * Sets the user by making a POST request to the createUser endpoint.
   *
   * @param {User} user - The user object to be set.
   * @return {Observable<User>} - An observable that emits the created user object.
   */
  public setUser(user: User): Observable<User> {
    return this.http.post<User>(this.createUser, user);
  }

  public getloginUser(user: User): Observable<User> {
    return this.http.post<User>(this.loginUser, user);
  }

  getLoginUserWithSeccion(): Observable<User> {
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    return this.http.get<User>(this.loginUserSeccion, {headers});
  }
}
