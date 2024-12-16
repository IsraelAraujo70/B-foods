import Button from '../ui/Button'
import {
  ItemBackground,
  ItemDescription,
  ItemPortion,
  ItemPrice,
  ItemTitle
} from './style'
type Props = {
  image: string
  name: string
  description: string
  price: number
  portion: string
  id: number
}
const CardapioItem = ({
  image,
  name,
  description,
  price,
  portion,
  id
}: Props) => {
  return (
    <>
      <ItemBackground>
        <img src={image} alt="" />
        <div>
          <ItemTitle>{name}</ItemTitle>
          <ItemPortion>{portion}</ItemPortion>
        </div>
        <ItemDescription>{description}</ItemDescription>
        <ItemPrice>
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </ItemPrice>
        <Button text="Adicionar ao Carrinho" variant="primary" />
      </ItemBackground>
    </>
  )
}

export default CardapioItem
