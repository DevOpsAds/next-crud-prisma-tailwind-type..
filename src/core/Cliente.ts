export default class Cliente {
  #idade: number;
  #nome: string;
  #id: string;

  constructor(nome: string, idade: number, id: string = "") {
    this.#idade = idade;
    this.#nome = nome;
    this.#id = id;
  }

  static vazio() {
    return new Cliente("", 0);
  }

  get nome() {
    return this.#nome;
  }
  get idade() {
    return this.#idade;
  }
  get id() {
    return this.#id;
  }
}
