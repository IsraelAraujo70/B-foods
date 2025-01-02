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

export const FormSchema = z.object({
  endereco: z.string().min(5, 'Endereço é obrigatório'),
  cidade: z.string().min(5, 'Cidade é obrigatória'),
  cep: z.string().min(8, 'CEP inválido').max(8, 'CEP inválido'),
  numero: z.number().min(1, 'Número é obrigatório'),
  complemento: z.string().optional()
})

export const FormCardSchema = z.object({
  nome: z.string().min(5, 'Nome é obrigatório'),
  numero: z
    .string()
    .min(16, 'Número do cartão é obrigatório')
    .max(16, 'Número do cartão é inválido'),
  cvv: z.string().min(3, 'CVV é obrigatório'),
  mesVencimento: z
    .number()
    .min(1, 'Mês de vencimento é obrigatório')
    .max(12, 'Mês de vencimento deve ser válido'),
  anoVencimento: z.number().min(2024, 'Ano de vencimento deve ser válido')
})

export type MenuItem = z.infer<typeof MenuItemSchema>
export type Restaurante = z.infer<typeof RestauranteSchema>
