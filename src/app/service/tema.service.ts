import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Temas';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`https://redeingressa.herokuapp.com/tema/${id}`, this.token
    );
  }

  getTemasComuns(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://redeingressa.herokuapp.com/tema/comuns', this.token)
  }
}
