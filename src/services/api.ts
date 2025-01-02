import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
type Product = {
  id: number
  price: number
}

type Delivery = {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complement: string
  }
}

type Payment = {
  card: {
    name: string
    number: string
    code: number
    expires: {
      month: number
      year: number
    }
  }
}

type OrderPayload = {
  products: Product[]
  delivery: Delivery
  payment: Payment
}

type OrderResponse = {
  orderId: string
}
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation<OrderResponse, OrderPayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useCreateOrderMutation } = api
export default api
