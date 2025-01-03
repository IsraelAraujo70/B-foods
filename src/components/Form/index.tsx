import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { set, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useCreateOrderMutation } from '../../services/api'
import { FormCardSchema, FormSchema } from '../../schemas/validation'
import {
  ErrorMessage,
  FormConfirmation,
  FormContainer,
  FormItem,
  FormItemException,
  FormS,
  FormTitle
} from './styles'
import Button from '../ui/Button'
import { RootState } from '../../store'
import { clear } from '../../store/reducers/cart'

interface FormDataEndereco {
  endereco: string
  cidade: string
  cep: string
  numero: number
  complemento: string
}

interface FormDataCartao {
  nome: string
  numero: string
  cvv: string
  mesVencimento: number
  anoVencimento: number
}

type FormProps = {
  handleFormClose?: () => void
  handleSidebarClose?: () => void
}

const Form = ({ handleFormClose, handleSidebarClose }: FormProps) => {
  const { items } = useSelector((state: RootState) => state.carts)
  const [createOrder] = useCreateOrderMutation()

  // Guardar dados preenchidos no State
  const [addressData, setAddressData] = useState<FormDataEndereco>()
  const [cardData, setCardData] = useState<FormDataCartao>()
  const [orderId, setOrderId] = useState<string>('')

  //Limpar o carrinho após a finalização do pedido
  const dispatch = useDispatch()

  // Form Endereço
  const {
    register: registerEndereco,
    handleSubmit: handleSubmitEndereco,
    formState: { errors: errorsEndereco }
  } = useForm<FormDataEndereco>({
    resolver: zodResolver(FormSchema)
  })

  // Form Cartão
  const {
    register: registerCartao,
    handleSubmit: handleSubmitCartao,
    formState: { errors: errorsCartao }
  } = useForm<FormDataCartao>({
    resolver: zodResolver(FormCardSchema)
  })

  // Submissão de Endereço
  const onSubmitEndereco = (data: FormDataEndereco) => {
    setAddressData(data)
    setEtapaAtual('pagamento')
  }

  // Submissão de Pagamento
  const onSubmitPagamento = (data: FormDataCartao) => {
    setCardData(data)
    setEtapaAtual('confirmacao')
  }

  // Etapas do Form
  const formSteps = ['endereco', 'pagamento', 'confirmacao']
  const [etapaAtual, setEtapaAtual] = useState(formSteps[0])

  const handleEtapas = () => {
    switch (etapaAtual) {
      case 'endereco':
        return 'Entrega'
      case 'pagamento':
        return 'Pagamento'
      case 'confirmacao':
        return 'Pedido realizado'
      default:
        return 'Endereço'
    }
  }

  // Mostrar valor total apenas na etapa pagamento
  const handleValue = () => {
    if (etapaAtual !== 'pagamento') {
      return ''
    }
    return ` - ${totalValue()}`
  }

  // Soma total dos items
  const totalValue = () => {
    return items
      .reduce((acc, item) => acc + item.preco, 0)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
  }

  // Concluir (fecha sidebar ou modal)
  const handleConcluir = () => {
    if (handleSidebarClose) {
      handleSidebarClose()
    }
    if (handleFormClose) {
      handleFormClose()
    }
  }

  // Submissão final + POST na API
  const handlePagamento = handleSubmitCartao(async (data: FormDataCartao) => {
    try {
      setCardData(data)
      const response = await createOrder({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: 'Fulano', // ou outro campo
          address: {
            description: addressData?.endereco || '',
            city: addressData?.cidade || '',
            zipCode: addressData?.cep || '',
            number: addressData?.numero || 0,
            complement: addressData?.complemento || ''
          }
        },
        payment: {
          card: {
            name: data.nome,
            number: data.numero,
            code: parseInt(data.cvv, 10),
            expires: {
              month: data.mesVencimento,
              year: data.anoVencimento
            }
          }
        }
      }).unwrap()
      setOrderId(response.orderId)
      dispatch(clear())
      setEtapaAtual('confirmacao')
      setEtapaAtual('confirmacao')
    } catch (error) {
      console.error('Erro ao criar pedido:', error)
    }
  })

  return (
    <FormContainer>
      <FormTitle>
        <h1>{`${handleEtapas()} ${handleValue()}`}</h1>
      </FormTitle>

      {etapaAtual === 'endereco' && (
        <FormS onSubmit={handleSubmitEndereco(onSubmitEndereco)}>
          <FormItem>
            <label htmlFor="endereco">Endereço</label>
            <input
              {...registerEndereco('endereco')}
              type="text"
              id="endereco"
            />
            {errorsEndereco.endereco && (
              <ErrorMessage>{errorsEndereco.endereco.message}</ErrorMessage>
            )}
          </FormItem>

          <FormItem>
            <label htmlFor="cidade">Cidade</label>
            <input {...registerEndereco('cidade')} type="text" id="cidade" />
            {errorsEndereco.cidade && (
              <ErrorMessage>{errorsEndereco.cidade.message}</ErrorMessage>
            )}
          </FormItem>

          <FormItemException>
            <FormItem>
              <label htmlFor="cep">CEP</label>
              <input {...registerEndereco('cep')} type="text" id="cep" />
              {errorsEndereco.cep && (
                <ErrorMessage>{errorsEndereco.cep.message}</ErrorMessage>
              )}
            </FormItem>
            <FormItem>
              <label htmlFor="numero">Número</label>
              <input
                {...registerEndereco('numero', {
                  setValueAs: (value: string) => parseInt(value, 10)
                })}
                type="number"
                id="numero"
              />
              {errorsEndereco.numero && (
                <ErrorMessage>{errorsEndereco.numero.message}</ErrorMessage>
              )}
            </FormItem>
          </FormItemException>

          <FormItem>
            <label htmlFor="complemento">Complemento</label>
            <input
              {...registerEndereco('complemento')}
              type="text"
              id="complemento"
            />
          </FormItem>

          <Button
            text="Continuar com o pagamento"
            variant="primary"
            type="submit"
          />
          <Button
            text="Voltar para o carrinho"
            variant="primary"
            onClick={handleFormClose}
          />
        </FormS>
      )}

      {etapaAtual === 'pagamento' && (
        <FormS onSubmit={handlePagamento}>
          <FormItem>
            <label htmlFor="nome">Nome</label>
            <input {...registerCartao('nome')} type="text" id="nome" />
            {errorsCartao.nome && (
              <ErrorMessage>{errorsCartao.nome.message}</ErrorMessage>
            )}
          </FormItem>
          <FormItem>
            <label htmlFor="numero">Número</label>
            <input {...registerCartao('numero')} type="text" id="numero" />
            {errorsCartao.numero && (
              <ErrorMessage>{errorsCartao.numero.message}</ErrorMessage>
            )}
          </FormItem>
          <FormItem>
            <label htmlFor="cvv">CVV</label>
            <input {...registerCartao('cvv')} type="text" id="cvv" />
            {errorsCartao.cvv && (
              <ErrorMessage>{errorsCartao.cvv.message}</ErrorMessage>
            )}
          </FormItem>
          <FormItemException>
            <FormItem>
              <label htmlFor="mesVencimento">Mês</label>
              <input
                {...registerCartao('mesVencimento', {
                  setValueAs: (value: string) => parseInt(value, 10)
                })}
                type="number"
                id="mesVencimento"
              />
              {errorsCartao.mesVencimento && (
                <ErrorMessage>
                  {errorsCartao.mesVencimento.message}
                </ErrorMessage>
              )}
            </FormItem>
            <FormItem>
              <label htmlFor="anoVencimento">Ano</label>
              <input
                {...registerCartao('anoVencimento', {
                  setValueAs: (value: string) => parseInt(value, 10)
                })}
                type="number"
                id="anoVencimento"
              />
              {errorsCartao.anoVencimento && (
                <ErrorMessage>
                  {errorsCartao.anoVencimento.message}
                </ErrorMessage>
              )}
            </FormItem>
          </FormItemException>
          <Button
            text="Finalizar o pagamento"
            variant="primary"
            type="submit"
          />
        </FormS>
      )}

      {etapaAtual === 'confirmacao' && (
        <FormConfirmation>
          <p>Número do pedido: {orderId}</p>
          <Button text="Concluir" variant="primary" onClick={handleConcluir} />
        </FormConfirmation>
      )}
    </FormContainer>
  )
}

export default Form
