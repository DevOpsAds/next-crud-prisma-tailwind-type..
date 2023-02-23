import { Botao } from "@/components/Botao";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {
  const clients = [
    new Cliente("João", 42, "1"),
    new Cliente("Miguel", 4, "2"),
    new Cliente("Lucia", 65, "3"),
  ];

  function editarCliente(cliente: Cliente) {
    console.log("comando selecionada " + cliente.nome);
  }

  function excluirCliente(cliente: Cliente) {
    console.log("comando exclusão ativado" + cliente.nome);
  }

  return (
    <div
      className="to flex flex-col h-screen items-center
    justify-center bg-purple-500 bg-gradient-to-r to-blue-600">
      <Layout titulo="Cadastro simples">
        <div className="flex justify-end">
          <Botao
            className={"mb-4"}
            cor={"bg-red-500"}>
            Novo Cliente
          </Botao>
        </div>

        <Tabela
          clientes={clients}
          clienteSelecionado={editarCliente}
          excluirCliente={excluirCliente}></Tabela>
      </Layout>
    </div>
  );
}
