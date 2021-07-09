import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }
  
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagensComuns(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://redeingressa.herokuapp.com/postagens/comuns', this.token)
  }

  postPostagemComum(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://redeingressa.herokuapp.com/postagens', postagem, this.token)
  }

  getPostagensEmAlta(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://redeingressa.herokuapp.com/postagens/emaltasemana', this.token)
  }

  getPostagemDeUsuario(id:number): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://redeingressa.herokuapp.com/postagens/usuario/${id}`, this.token)
  }

  putPostagemDeUsuario(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://redeingressa.herokuapp.com/postagens', postagem, this.token)
  }

  getPostagemById(id:number):Observable<Postagem>{
    return this.http.get<Postagem>(`https://redeingressa.herokuapp.com/postagens/${id}`, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://redeingressa.herokuapp.com/postagens/${id}`, this.token)
  }

}
