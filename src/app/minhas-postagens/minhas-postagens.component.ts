import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Temas';
import { Usuario } from '../model/Usuario';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-minhas-postagens',
  templateUrl: './minhas-postagens.component.html',
  styleUrls: ['./minhas-postagens.component.css']
})
export class MinhasPostagensComponent implements OnInit {

  nome = environment.nome

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number;


  usuario: Usuario = new Usuario()
  user = environment.id


  idPostagem:number
  postagem: Postagem[]
  postagemUsuario: Postagem = new Postagem()

  constructor(
    private router:Router,
    private postagemService: PostagemService,
    private route: ActivatedRoute,
    private temaService: TemaService
  ) { }

  ngOnInit() {

  /*  this.getAllPostagensDeUsuario()*/

    
   // this.findPostagemId()

   this.getAllPostagensDeUsuario()
   this.findAllTemas()

  }

  getAllPostagensDeUsuario(){
    this.postagemService.getPostagemDeUsuario(this.user).subscribe((resp: Postagem[])=>{
      this.postagem = resp
    })

  }

  redEditPost(id: number){
    this.router.navigate(["minhas-postagens/", id]);
  }

  findPostagemId(){
    this.idPostagem = this.route.snapshot.params['id']
    this.postagemService.getPostagemById(this.idPostagem).subscribe((resp:Postagem)=>{
      this.postagemUsuario = resp
    })
  }

  findByIdTema() {
  
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp;

    })
  }

 findAllTemas(){
   this.temaService.getAllTemas().subscribe((resp: Tema[])=>{
     this.listaTemas = resp;
   })
 }


 atualizar() {

  this.tema.id = this.idTema

  this.postagemUsuario.tema = this.tema

  this.usuario.id = this.user

  this.postagemUsuario.usuario = this.usuario

  this.postagemUsuario.qtCurtidas = null;

  this.postagemService.putPostagemDeUsuario(this.postagemUsuario).subscribe((resp: Postagem) => {
    this.postagemUsuario = resp

    alert('Edição feita com sucesso')
  })
}

}
