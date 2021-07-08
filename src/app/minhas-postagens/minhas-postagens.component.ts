import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Temas';
import { Usuario } from '../model/Usuario';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-minhas-postagens',
  templateUrl: './minhas-postagens.component.html',
  styleUrls: ['./minhas-postagens.component.css']
})
export class MinhasPostagensComponent implements OnInit {

  temaEscolhido: number;
  tema: Tema = new Tema()

  usuario: Usuario = new Usuario()
  user = environment.id

idUsuario = environment.id


idPostagem:number
postagem: Postagem[]
postagemUsuario: Postagem = new Postagem()

  constructor(
    private router:Router,
    private postagemService: PostagemService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.getAllPostagensDeUsuario()



    let id = this.route.snapshot.params['id']

    this.findPostagemId(id)

  }

  getAllPostagensDeUsuario(){
    this.postagemService.getPostagemDeUsuario(this.idUsuario).subscribe((resp: Postagem[])=>{
      this.postagem = resp
    })

  }

  findPostagemId(id:number){
    this.postagemService.getPostagemById(id).subscribe((resp:Postagem)=>{
      this.postagemUsuario = resp
    })
  }

  putPostagensUsuario() {
    this.usuario.id = this.user


    this.postagemUsuario.usuario = this.usuario

    this.postagemUsuario.id = this.idPostagem
    this.postagemService.putPostagemDeUsuario(this.postagemUsuario).subscribe((resp: Postagem)=>{
      this.postagemUsuario = resp
      alert('Edição feita com sucesso')
    })
  }

}
