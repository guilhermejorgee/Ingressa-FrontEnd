import { Postagem } from "./Postagem";

export class Tema{

    public id: number;

    public area: String;

    public descricao: String;

    public palavraChave: String;

    public postagem: Postagem[];

}