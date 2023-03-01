import ColectionsFirebase from "@/backend/database/ColectionsFirebase";
import { Botao } from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import { useState } from "react";

export default function Home() {
  const repo: ClienteRepositorio = new ColectionsFirebase();

  const [view, setView] = useState<"tabela" | "form">("tabela");
  const [nclient, setNclient] = useState(Cliente.vazio);

  const [clients, setClients] = useState<Cliente[]>([]);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClients(clientes);
      setView("tabela");
    });
  }

  function editarCliente(cliente: Cliente) {
    console.log("comando selecionada " + cliente.nome);
    setNclient(cliente);
    setView("form");
  }

  function novoClient() {
    setNclient(Cliente.vazio());
    setView("form");
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  async function Alterar(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }

  {
    if (view === "tabela") {
      return (
        <div
          className="to flex flex-col h-screen items-center
    justify-center bg-purple-500 bg-gradient-to-r to-blue-600">
          <Layout titulo="Cadastro simples">
            <div className="flex justify-end">
              <Botao
                onclick={novoClient}
                className={"mb-4"}
                cor={"bg-green-500"}>
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
    } else {
      return (
        <div
          className="to flex flex-col h-screen items-center
    justify-center bg-purple-500 bg-gradient-to-r to-blue-600">
          <Layout titulo="Cadastro simples">
            <Formulario
              alterarCliente={Alterar}
              onclick={() => setView("tabela")}
              cliente={nclient}
            />
          </Layout>
        </div>
      );
    }
  }
}
