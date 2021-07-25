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


  entrar(userLogin: UserLogin): Observable<UserLogin> {

    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin);

  }

  cadastrar(usuario: Usuario): Observable<Usuario> {

    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario);

  }

  atualizar(usuario: Usuario): Observable<Usuario> {

    return this.http.put<Usuario>('http://localhost:8080/usuarios', usuario, { headers: new HttpHeaders().set('Authorization', environment.token) });

  }

  logado() {

    let ok: boolean = false

    if (environment.token != '') {
      ok = true;
    }

    return ok;

  }


  admin() {



    if (environment.usuarioAdmin == true) {

      return true;
    }
    return false
  }


  empregador() {



    if (environment.usuarioEmpregador == true) {

      return true;
    }
    return false
  }

  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(
      `http://localhost:8080/usuarios/${id}`,
      { headers: new HttpHeaders().set('Authorization', environment.token) }
    )
  }

  curtirPostagem(idUsuario: number, idPostagem: number): Observable<Usuario> {
    return this.http.put<Usuario>(`http://localhost:8080/usuarios/adicionarcurtida/${idUsuario}/${idPostagem}`, null, { headers: new HttpHeaders().set('Authorization', environment.token) })
  }

  descurtirPostagem(idUsuario: number, idPostagem: number): Observable<Usuario> {
    return this.http.put<Usuario>(`http://localhost:8080/usuarios/removercurtida/${idUsuario}/${idPostagem}`, null, { headers: new HttpHeaders().set('Authorization', environment.token) })
  }

  getTopUsuariosEmpregadores(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost:8080/usuarios/tops', { headers: new HttpHeaders().set('Authorization', environment.token) } )
  }


  
}



