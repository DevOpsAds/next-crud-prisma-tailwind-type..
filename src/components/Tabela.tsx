import Cliente from "@/core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (Cliente: Cliente) => void;
  excluirCliente?: (Cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {
  const botoesAcao = props.clienteSelecionado || props.excluirCliente;
  function renderizarCabecalho() {
    return (
      <tr className={`text-left `}>
        <th className={`p-4`}>Código:</th>
        <th className={`p-4`}>Nome:</th>
        <th className={`p-4`}>Idade:</th>
        {botoesAcao ? <th className={`text-center p-4`}>Ação:</th> : false}
      </tr>
    );
  }

  function renderizarClientes() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-300"}`}>
          <td className={`text-left p-4`}>{cliente.id}</td>
          <td className={`text-left p-4`}>{cliente.nome}</td>
          <td className={`text-left p-4`}>{cliente.idade}</td>
          {renderizarBotoes(cliente)}
        </tr>
      );
    });
  }

  function renderizarBotoes(cliente: Cliente) {
    if (botoesAcao) {
      return (
        <td className="text-center p-4">
          <button
            onClick={() => {
              props.clienteSelecionado?.(cliente);
            }}
            className="p-4 m-1 rounded-full  hover:bg-purple-50
        text-green-500
        ">
            {IconeEdicao}
          </button>
          <button
            onClick={() => {
              props.excluirCliente?.(cliente);
            }}
            className="p-4 m-1 rounded-full  hover:bg-purple-50
         text-red-500
         ">
            {IconeLixo}
          </button>
        </td>
      );
    } else {
      false;
    }
  }

  return (
    <table className={` w-full overflow-hidden rounded-xl`}>
      <thead
        className={`bg-gradient-to-r from bg-purple-800 to-purple-200 text-gray-100
        `}>
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarClientes()}</tbody>
    </table>
  );
}
