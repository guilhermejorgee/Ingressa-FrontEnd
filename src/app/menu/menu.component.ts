import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(){
  }

  deslogar(){

    this.router.navigate(['/entrar'])

    environment.id = 0
    environment.nome = ''
    environment.token = ''
    environment.usuarioEmpregador = false,
    environment.fotoPerfil = ''
  
  }

}
