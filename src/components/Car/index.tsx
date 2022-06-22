import React from 'react'

import GasolineSvg from '../../assets/gasoline.svg'

import * as S from './style'

type CarProps = {
  brand: string
  name: string
  rent: {
    period: string
    price: number
  }
  thumbnail: string
}

type Props = {
  data: CarProps
}

export function Car({ data }: Props) {
  return (
    <S.Container>
      <S.Flex>
        <S.Brand>{data.brand}</S.Brand>
        <S.Name>{data.name}</S.Name>

        <S.Box>
          <S.Wrapper>
            <S.Text>{data.rent.period}</S.Text>
            <S.Heading>{`R$ ${data.rent.price}`}</S.Heading>
          </S.Wrapper>

          <S.Type>
            <GasolineSvg />
          </S.Type>
        </S.Box>
      </S.Flex>

      <S.Image resizeMode="contain" source={{ uri: data.thumbnail }} />
    </S.Container>
  )
}
