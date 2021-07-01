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

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmSenha(event: any) {

    this.validacaoSenha = event.target.value;

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

      })
    }
  }

}
