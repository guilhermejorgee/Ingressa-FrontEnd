import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Temas';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { InicioService } from '../service/inicio.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url: string) {

    let regex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\\-]+\?v=|embed\/|v\/))(\S+)?$/

    if (regex.test(url)) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    else {
      return null;
    }


  }
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nome = environment.nome

  foto = environment.fotoPerfil

  postagens: Postagem[]

  postagensEmAlta: Postagem[]

  temas: Tema[]

  postagem: Postagem = new Postagem()

  temaEscolhido: number;

  tema: Tema = new Tema()

  usuario: Usuario = new Usuario()

  user = environment.id

  urlVideo: string;


  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,

  ) { }

  ngOnInit() {

    /*   if(environment.token == ''){
         alert('Sessão expirada, faça login novamente')
         this.router.navigate(['/entrar'])
   
   
       }*/

    this.findPostagensComuns()

    this.findPostagensEmAlta()

    this.getAllTemas()

  }



  /* verificaFoto() {
 
     let foto;
 
     const verificador = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
 
     // if(environment.fotoPerfil.match(verificador)){
 
     if (verificador.test(environment.fotoPerfil)) {
 
       foto = environment.fotoPerfil
 
     }
     else {
 
       foto = "../assets/unnamed.png"
     }
 
     return foto;
 
   }*/

  findPostagensComuns() {

    this.postagemService.getAllPostagensComuns().subscribe((resp: Postagem[]) => {
      this.postagens = resp;

    })
  }


  findByIdTema() {

    this.temaService.getByIdTema(this.temaEscolhido).subscribe((resp: Tema) => {
      this.tema = resp;
      console.log(this.tema.id)
    })
  }

  PostPostagensComum() {

    let regex = /^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.?be)\/.+$/

    if (regex.test(this.postagem.midia)) {

      const regex = /(?:.+)(?:\.be\/|v=)(.+?)(?:&|$)(?:t=)?(.+)?/gm
      const subst = `$1`;

      let url = this.postagem.midia
  
      let idVideo = url.replace(regex, subst);

      this.postagem.midia = "https://www.youtube.com/embed/" + idVideo;

    }

    this.usuario.id = this.user

    this.postagem.usuario = this.usuario

    this.tema.id = this.temaEscolhido

    this.postagem.tema = this.tema

    this.postagemService.postPostagemComum(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp;


      alert('Postagem realizada com sucesso')
      this.findPostagensComuns()
      this.postagem = new Postagem()
      this.router.navigate(['/inicio'])
    })
  }

  getAllTemas() {
    this.temaService.getTemasComuns().subscribe((resp: Tema[]) => {
      this.temas = resp
    })
  }

  findPostagensEmAlta() {
    this.postagemService.getPostagensEmAlta().subscribe((resp: Postagem[]) => {
      this.postagensEmAlta = resp;
    })

  }

  verificandoVideo(url: string) {

    let regex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\\-]+\?v=|embed\/|v\/))(\S+)?$/

    if (regex.test(url)) {
      return true
    }
    else {
      return false;
    }

  }

}