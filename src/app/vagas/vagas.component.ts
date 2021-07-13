import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  constructor(
    private router: Router
    
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == ''){
      alert('Sessão expirada, faça login novamente')
      this.router.navigate(['/entrar'])


    }

  }

}
