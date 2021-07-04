import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario();

  validacaoSenha: string;

  tipoDeUsuario: boolean;

  consultaClickAdmin: number = 0;

  codigoAdminDigitado: string;


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.usuario.usuarioAdmin = false;
  }




validandoEmail(){

const validaEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

let email = document.querySelector("#email");

let emailValue = (<HTMLInputElement>document.querySelector("#email")).value.length;

if(validaEmail.test(this.usuario.email)){

    email.setAttribute('style', 'border-color:#53d78b');
}
else if(emailValue == 0){
  email.setAttribute('style', 'border-color:#9794F2');
}
else{

    email.setAttribute('style', 'border-color:#e84c3d');
}

}

validandoSenha(){

let senha = document.querySelector("#senha");

let senhaValue = (<HTMLInputElement>document.querySelector("#senha")).value.length;

const validaSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if(validaSenha.test(this.validacaoSenha)){
    
        senha.setAttribute('style', 'border-color:#53d78b');
    }
    else if(senhaValue == 0){
        senha.setAttribute('style', 'border-color:#9794F2');
    }
    else{
    
        senha.setAttribute('style', 'border-color:#e84c3d');
    }
    
    }

  verificandoSenhas(){

    let senhaConfirm = document.querySelector("#confirmSenha");

    let confirmSenhaValue = (<HTMLInputElement>document.querySelector("#confirmSenha")).value.length;

   

    if (this.usuario.senha != this.validacaoSenha) {

      senhaConfirm.setAttribute('style', 'border-color:#e84c3d');

    }
    else if(confirmSenhaValue == 0){
      senhaConfirm.setAttribute('style', 'border-color:#9794F2');
    }
    else{
      senhaConfirm.setAttribute('style', 'border-color:#53d78b');
    }

  }  

  confirmSenha(event: any) {

    this.validacaoSenha = event.target.value;

  }

  exibeAdmin(){

    let admin = document.querySelector("#admin");

    if(this.consultaClickAdmin == 0){
      this.consultaClickAdmin = 1;
      admin.setAttribute('style', 'display:inline');
    }
    else{
      this.consultaClickAdmin = 0;
      admin.setAttribute('style', 'display:none');
    }


    }

    verificandoAdmin(event: any){

      this.codigoAdminDigitado = event.target.value

      if(this.codigoAdminDigitado != '6969:D'){
        this.usuario.usuarioAdmin = false;
       
      }
      else{
        this.usuario.usuarioAdmin = true;
      }

    }

  

  tipoUsuario(event: any) {


    if (event.target.value == 'valor2') {
      this.tipoDeUsuario = false
    }
    else if (event.target.value == 'valor3') {
      this.tipoDeUsuario = true;
    }

 



  }

  cadastrar() {

    this.usuario.usuarioEmpregador = this.tipoDeUsuario

    if(this.usuario.usuarioEmpregador == null){
      alert('Escolha uma das opções')
    }

    if (this.usuario.senha != this.validacaoSenha) {
      alert('Senhas diferentes')


    }
    else {

      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;


      this.router.navigate(['/entrar'])

      alert('Usuario cadastrado com sucesso')

      }, erro=>{
        if(erro.status == 400 || erro.status == 500){
          alert('Informações inválidas')
        }
      })
    }
  }

}
