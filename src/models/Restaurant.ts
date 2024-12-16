import { Cardapio } from './Cardapio'

export class Restaurant {
  image: string
  categoria: string
  destaque: boolean
  nome: string
  avaliacao: number
  descricao: string
  cardapio: Cardapio[]
  id: number
  constructor(
    id: number,
    image: string,
    categoria: string,
    destaque: boolean,
    nome: string,
    cardapio: Cardapio[],
    avaliacao: number,
    descricao: string
  ) {
    this.id = id
    this.image = image
    this.categoria = categoria
    this.destaque = destaque
    this.nome = nome
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.cardapio = cardapio
  }
}
