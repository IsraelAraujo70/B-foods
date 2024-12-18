export class Cardapio {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string

  constructor(
    id: number,
    foto: string,
    nome: string,
    descricao: string,
    preco: number,
    porcao: string
  ) {
    this.id = id
    this.foto = foto
    this.nome = nome
    this.descricao = descricao
    this.preco = preco
    this.porcao = porcao
  }
}
