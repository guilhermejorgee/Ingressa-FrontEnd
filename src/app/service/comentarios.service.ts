import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Comentarios } from '../model/Comentarios';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(
    private http: HttpClient
  ) { }

  postarComentario(comentario: Comentarios): Observable<Comentarios>{
   return this.http.post<Comentarios>('http://localhost:8080/comentario', comentario, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  atualizarComentario(comentario: Comentarios): Observable<Comentarios>{
    return this.http.put<Comentarios>('http://localhost:8080/comentario', comentario, {headers: new HttpHeaders().set('Authorization', environment.token)})
   }

  deletarComentario(id: number){
    return this.http.delete(`http://localhost:8080/comentario/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)})
   }

}
