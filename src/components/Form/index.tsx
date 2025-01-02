import React, { useState } from 'react'
import Button from '../ui/Button'
import { zodResolver } from '@hookform/resolvers/zod'

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
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

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
  const {
    register: registerEndereco,
    handleSubmit: handleSubmitEndereco,
    formState: { errors: errorsEndereco }
  } = useForm<FormDataEndereco>({
    resolver: zodResolver(FormSchema)
  })

  const {
    register: registerCartao,
    handleSubmit: handleSubmitCartao,
    formState: { errors: errorsCartao }
  } = useForm<FormDataCartao>({
    resolver: zodResolver(FormCardSchema)
  })

  const onSubmitEndereco = (data: FormDataEndereco) => {
    console.log(data)
    setEtapaAtual('pagamento')
  }
  const onSubmitPagamento = (data: FormDataCartao) => {
    console.log(data)
    setEtapaAtual('confirmacao')
  }
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
  const handleValue = () => {
    if (etapaAtual !== 'pagamento') {
      return ''
    } else {
      return ` - ${totalValue()}`
    }
  }
  const totalValue = () => {
    return items
      .reduce((acc, item) => {
        return acc + item.preco
      }, 0)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
  }
  return (
    <>
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
          <FormS onSubmit={handleSubmitCartao(onSubmitPagamento)}>
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
            <Button
              text="Voltar para cadastro de Endereço"
              variant="primary"
              onClick={() => setEtapaAtual(formSteps[0])}
            />
          </FormS>
        )}
        {etapaAtual === 'confirmacao' && (
          <>
            <FormConfirmation>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </FormConfirmation>
            <Button
              text="Concluir"
              variant="primary"
              onClick={handleSidebarClose}
            />
          </>
        )}
      </FormContainer>
    </>
  )
}

export default Form
