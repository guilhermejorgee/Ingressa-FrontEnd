import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
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

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }


  entrar(userLogin: UserLogin): Observable<UserLogin>{

    return this.http.post<UserLogin>('https://redeingressa.herokuapp.com/usuarios/logar', userLogin);
    
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{

    return this.http.post<Usuario>('https://redeingressa.herokuapp.com/usuarios/cadastrar', usuario);

  }

  atualizar(usuario: Usuario): Observable<Usuario>{

    return this.http.put<Usuario>('https://redeingressa.herokuapp.com/usuarios', usuario, {headers: new HttpHeaders().set('Authorization', environment.token)});

  }

  logado(){

    let ok: boolean = false

    if(environment.token != ''){
      ok = true;
    }

    return ok;

  }


  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(
      `https://redeingressa.herokuapp.com/usuarios/${id}`,
      {headers: new HttpHeaders().set('Authorization', environment.token)}
    )
  }


}
