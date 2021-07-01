import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }


  entrar(userLogin: UserLogin): Observable<UserLogin>{

    return this.http.post<UserLogin>('https://redeingressa.herokuapp.com/usuarios/logar', userLogin);
    
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{

    return this.http.post<Usuario>('https://redeingressa.herokuapp.com/usuarios/cadastrar', usuario);

  }
}
