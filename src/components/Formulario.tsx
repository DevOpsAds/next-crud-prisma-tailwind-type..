import Cliente from "@/core/Cliente";
import { text } from "stream/consumers";
import { Botao } from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;
}

export default function Formulario(props: FormularioProps) {
  return (
    <div>
      <Entrada
        tipo={"number"}
        bloqueio={false}
        caption={"Código:"}
      />

      <Entrada
        tipo={"text"}
        bloqueio={true}
        caption={"Nome:"}
      />
      <Entrada
        tipo={"number"}
        bloqueio={true}
        caption={"Idade:"}
      />

      <div className="flex justify-end mt-7">
        <Botao
          cor={"bg-red-500"}
          className={"mr-2"}>
          Cancelar
        </Botao>
        <Botao cor={"bg-blue-500"}>Alterar|salvar</Botao>
      </div>
    </div>
  );
}
