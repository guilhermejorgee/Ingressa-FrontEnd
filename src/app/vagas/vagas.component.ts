import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Temas';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  usuario: Usuario = new Usuario()
  user = environment.id

  postagem: Postagem = new Postagem()

  tema: Tema = new Tema
  listaTema: Tema[]
  temaEscolhido: number

  listaPostagens: Postagem[]

  key = 'dataDePostagem'
  reverse = true

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private alertas: AlertasService,
    private temaService: TemaService,
    public authService: AuthService

  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      alert('Sessão expirada, faça login novamente')
      this.router.navigate(['/entrar'])


    }

    this.findTemasVagas()

    this.findPostagensVagas()
  }

  postVaga() {

    this.tema.id = this.temaEscolhido
    this.postagem.tema = this.tema
    this.usuario.id = this.user
    this.postagem.usuario = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.postagem = new Postagem()
      this.findPostagensVagas()
      this.alertas.showAlertSuccess('Vaga publicada com sucesso!')
      
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.temaEscolhido).subscribe((resp: Tema)=>{
      this.tema = resp
    })

  }

  findTemasVagas(){
    this.temaService.getTemasVagas().subscribe((resp: Tema[])=>{
      this.listaTema = resp
    })
  }

  findPostagensVagas(){
    this.postagemService.getAllPostagensVagas().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

}