<h1>Ingressa</h1>

>Status: Desenvolvimento

<h4>O projeto INGRESS/A surgiu com a proposta de trazer mais oportunidades para as mulheres na área de tecnologia, tendo em 
vista a desigualdade de gênero presente no mercado de trabalho.
O projeto aborda a desigualdade de gênero, em específico na falta de inclusão da mulher no mercado de trabalho, busca 
criar uma plataforma aberta para receber profissionais mulheres e conectá-las a possíveis empregadores.</h4>

Campos da Model usuario

+ id
+ nome
+ email
+ dataNascimento
+ senha
+ usuarioEmpregador
+ descSobre
+ fotoPerfil

O campo dataNascimento é utilizado para verificar a idade do usuario cadastrado, e se ele for menor de 14 anos, o usuário não pode
usar a plataforma, já que ele não seria empregável
O campo usuarioEmpregador é um boolean que serve para verificar se o usuário pretende criar uma conta de empregador ou de candidato
a emprego.

<h3>Tecnologias usadas</h3>

<table>
	<tr>
		<td>Java</td>
		<td>Spring</td>
		<td>Postgres</td>
		<td>HTML</td>
		<td>CSS</td>
		<td>Bootstrap</td>
		<td>Angular</td>
  </tr>
	<tr>
		<td>16</td>
		<td>4</td>
		<td>--</td>
		<td>5</td>
		<td>4.15</td>
		<td>5.*</td>
		<td>12.0.1</td>
	</tr>
</table>





Implementações futuras:

+ Canal de suporte
+ Filtro de vagas que se encaixem melhor no perfil da profissional
+ Avaliação de empregadores












# Ingressa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
