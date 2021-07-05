import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nome = environment.nome

  

  constructor(
   private router: Router
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      alert('Sessão expirada, faça login novamente')
      this.router.navigate(['/entrar'])


    }

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
  }