import { Postagem } from "./Postagem";

export class Usuario{

    public id: number;

    public nome: string;

    public email: string;

    public dataNascimento: Date;

    public senha: string;

    public usuarioEmpregador: boolean;

    public descSobre: string;

    public fotoPerfil: string;

    public qtdPostagem: number;

    public usuarioAdmin: boolean;

    public postagem: Postagem[];
 

}