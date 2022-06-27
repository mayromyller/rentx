import React from 'react'

import { TouchableOpacityProps } from 'react-native'

import GasolineSvg from '../../assets/gasoline.svg'

import * as S from './style'
import IconType from '../../utils/carIcons'

export type CarProps = {
  id: string
  name: string
  brand: string
  about: string
  fuel_type: string
  thumbnail: string
  photos: []
  accessories: {
    type: string
    name: string
  }[]
  rent: {
    period: string
    price: number
  }
}

type Props = TouchableOpacityProps & {
  data: CarProps
}

export function Car({ data, ...rest }: Props) {
  const IconMotor = IconType(data.fuel_type)

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
            <IconMotor />
          </S.Type>
        </S.Box>
      </S.Flex>

      <S.Image resizeMode="contain" source={{ uri: data.thumbnail }} />
    </S.Container>
  )
}
