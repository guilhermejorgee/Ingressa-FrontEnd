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
    headers: new HttpHeaders().set('Authorization', environment.token).set('Content-Type','application/json').set('Access-Control-Allow-Origin','*').set('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
  }




  getAllPostagensComuns(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('http://localhost:8080/postagens/comuns', {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  getAllPostagensVagas(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('http://localhost:8080/postagens/vagas', {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  getByIdUserByIdTema(idUsuario: number, idTema: number): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`http://localhost:8080/postagens/usuario/${idUsuario}/tema/${idTema}`, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }


  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('http://localhost:8080/postagens', postagem, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  getPostagensEmAlta(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('http://localhost:8080/postagens/emaltasemana', {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  getPostagemComumDeUsuario(id:number): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`http://localhost:8080/postagens/comum/usuario/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  putPostagemDeUsuario(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('http://localhost:8080/postagens', postagem, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  getPostagemById(id:number):Observable<Postagem>{
    return this.http.get<Postagem>(`http://localhost:8080/postagens/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }
  //pegar vaga publicada
  getVagasById(id:number):Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`http://localhost:8080/postagens/vaga/usuario/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  getByIdVagaTema(idUsuario: number, idTema: number):Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`http://localhost:8080/postagens/usuario/${idUsuario}/tema/${idTema}`,  {headers: new HttpHeaders().set('Authorization', environment.token)})
  }



  deletePostagem(id: number){
    return this.http.delete(`http://localhost:8080/postagens/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  contCurtidaPostagem(id: number): Observable<Postagem>{
    return this.http.put<Postagem>(`http://localhost:8080/postagens/curtir/${id}`, null, {    headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  contRemoverCurtidaPostagem(id: number): Observable<Postagem>{
    return this.http.put<Postagem>(`http://localhost:8080/postagens/descurtir/${id}`, null, {    headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  getPostagemByRegiao(regiao: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`http://localhost:8080/postagens/regiao/${regiao}`, { headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  getPostagemAreaCargo(pesquisa: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`http://localhost:8080/postagens/areacargo/${pesquisa}`, { headers: new HttpHeaders().set('Authorization', environment.token)})
  }
  
  getPostagemAreaCargoRegiao(pesquisa: string, regiao: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`http://localhost:8080/postagens/areacargo/${pesquisa}/regiao/${regiao}`, { headers: new HttpHeaders().set('Authorization', environment.token)})
  }
}
