import { Postagem } from "./Postagem";
import { Usuario } from "./Usuario";

export class Comentarios{

    public id: number;

    public comentario: string;

    public usuario: Usuario;

    public postagem: Postagem;

}