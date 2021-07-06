import { Tema } from "./Temas";
import { Usuario } from "./Usuario";


export class Postagem{

    public id: number;

    public dataDePostagem: Date;

    public regiao: String;

    public cargo: String;

    public titulo: String;

    public texto: String;

    public midia: String;

    public qtCurtidas: number;

    public tema: Tema;

    public usuario: Usuario;

}