import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Temas';
import { InicioService } from '../service/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nome = environment.nome

  postagens: Postagem[]

  temas: Tema[]

  postagem: Postagem = new Postagem()

  temaEscolhido: number;

  tema: Tema = new Tema()

  

  constructor(
   private router: Router,
   private inicioService: InicioService
  ) { }

  ngOnInit() {

 /*   if(environment.token == ''){
      alert('Sessão expirada, faça login novamente')
      this.router.navigate(['/entrar'])


    }*/

    this.findPostagensComuns()

    this.getAllTemas()
  }


  verificaFoto(){

    let foto;

    const verificador = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
    
   // if(environment.fotoPerfil.match(verificador)){

    if(verificador.test(environment.fotoPerfil)){

      foto = environment.fotoPerfil
      
    }
    else{

      foto = "../assets/unnamed.png"
    }

    return foto;

  }

  findPostagensComuns(){
    this.inicioService.getAllPostagensComuns().subscribe((resp: Postagem[])=>{
      this.postagens = resp;

      console.log(this.postagens)
    })
  }

  tipoTema(event: any){

    this.temaEscolhido = event.target.value
    this.postagem.tema.id = this.temaEscolhido
  
    console.log(this.temaEscolhido)
    }

  PostPostagensComum(){

      this.postagem.usuario.id = environment.id


    this.inicioService.postPostagemComum(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp;

      


      alert('Postagem realizada com sucesso')

     this.router.navigate(['/inicio'])
    })
  }

  getAllTemas(){
    this.inicioService.getTemasComuns().subscribe((resp: Tema[])=>{
      this.temas = resp
    })
  }

  findByIdTema(){
    this.inicioService.getByIdTema(this.temaEscolhido).subscribe((resp: Tema)=>{
      this.tema = resp;
    })
  }





  }