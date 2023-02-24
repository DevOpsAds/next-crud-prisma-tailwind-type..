import Cliente from "@/core/Cliente";
import { useState } from "react";
import { text } from "stream/consumers";
import { Botao } from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;

  onclick: () => void;
  alterarCliente: (cliente: Cliente) => void;
}

export default function Formulario(props: FormularioProps) {
  const idVerify = props.cliente?.id;

  const [id, setid] = useState(props.cliente.id ?? "");
  const [nome, setnome] = useState(props.cliente.nome ?? "");
  const [idade, setidade] = useState(props.cliente.idade ?? "0");

  //   console.log("id" + idVerify);
  return (
    <div>
      {idVerify ? (
        <Entrada
          tipo={"number"}
          bloqueio={false}
          caption={"Código:"}
          valor={id}
          mudouvalor={setnome}
        />
      ) : (
        false
      )}

      <Entrada
        tipo={"text"}
        bloqueio={false}
        caption={"Nome:"}
        valor={nome}
        mudouvalor={setnome}
      />
      <Entrada
        tipo={"number"}
        bloqueio={false}
        caption={"Idade:"}
        valor={idade}
        mudouvalor={setnome}
      />

      <div className="flex justify-end mt-7">
        <Botao
          cor={"bg-gray-500"}
          className={"mr-2"}
          onclick={props.onclick}>
          Cancelar
        </Botao>

        <Botao
          onclick={() => props.alterarCliente?.(new Cliente(nome, idade, id))}
          cor={"bg-blue-500"}>
          {id ? "Alterar" : "Salvar"}
        </Botao>
      </div>
    </div>
  );
}
