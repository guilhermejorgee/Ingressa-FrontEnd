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
    return this.http.get<Postagem[]>('https://redeingressa.herokuapp.com/postagens/emalta', this.token)
  }

}
