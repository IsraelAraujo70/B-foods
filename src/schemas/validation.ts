import { z } from 'zod'

export const MenuItemSchema = z.object({
  foto: z.string(),
  preco: z.number(),
  id: z.number(),
  nome: z.string(),
  descricao: z.string(),
  porcao: z.string()
})

export const RestauranteSchema = z.object({
  id: z.number(),
  titulo: z.string(),
  destacado: z.boolean(),
  tipo: z.string(),
  avaliacao: z.number(),
  descricao: z.string(),
  capa: z.string(),
  cardapio: z.array(MenuItemSchema)
})

export type MenuItem = z.infer<typeof MenuItemSchema>
export type Restaurante = z.infer<typeof RestauranteSchema>
