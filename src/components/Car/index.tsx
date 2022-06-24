import React from 'react'

import { TouchableOpacityProps } from 'react-native'

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

type Props = TouchableOpacityProps & {
  data: CarProps
}

export function Car({ data, ...rest }: Props) {
  return (
    <S.Container {...rest} activeOpacity={0.8}>
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
