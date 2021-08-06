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

Resumo:
Neste projeto foi utilizado todo conhecimento abordado no bootcamp da Generation Brasil, como o framework SpringBoot para criação da API REST no back-end, juntamente com: Java, JUnit, MySQL e as tecnologias/ferramentas: Postman, Swagger, Heroku. Posteriomente o framework Angular no front-end, para o consumo da API, em conjunto com: Bootstrap, JavaScript, TypeScript, Nodejs e tecnologias/ferramentas, como: Figma, VSCODE.

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
    <td>Heroku</td>
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

<h3>Principais Funcionalidades</h3>

<ul>
  <li>Editar perfil</li>
  <li>Fazer postagens comuns e de vagas de emprego / Editar e deletar essas postagens</li>
  <li>Curtir e descurtir postagens / Verificar quem curtiu a postagem</li>
  <li>Comentar nas postagens</li>
  <li>Se interessar por uma vaga / Verificar quem se interessou pela vaga</li>
  <li>Ranking dos empregadores que mais postaram vagas na plataforma</li>
  <li>Ranking de postagem com mais curtidas nos últimos 7 dias</li>
  <li>Filtro de busca de vagas apenas por cargo ou área, apenas por região e por carga ou área e região</li>
  <li>Visitar perfis e editar perfil</li>
  <li>As alterações na formatação do texto feitas no textarea quando a postagem está sendo criada são identificadas e convertidas em tag's HTML para posteriormente ser exibido com as quebras de linhas e espaços. Além de criarmos a tag "<d></d>" para destacar uma palavra</li>
</ul>
<hr>

Entre em contato com um dos desenvolvedores para solicitar a chave para ativação das funções administrativas do seu usuário.





Implementações futuras:

+ Canal de suporte
+ Filtro de vagas que se encaixem melhor no perfil da profissional
+ Avaliação de empregadores
