interface TabelaProps{
    id:number;
    nome:string;
    email:string;


}
export default function Tabela (props:TabelaProps){


      const id=this.id;
     const nome=this.nome;
     const email=this.email;


     construction Tabela (id,nome,email){

       return (
        <Tabela>
            <hr>
                <tr>id</tr>
                <tr>nome</tr>
                <tr>email</tr>

            </hr>
        </Tabela>

        )



     }



}
