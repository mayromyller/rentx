import React from 'react'

import { TouchableOpacityProps } from 'react-native'

import * as S from './style'

type Props = TouchableOpacityProps & {
  title: string
  color?: string
}

export function Button({ title, color, ...rest }: Props) {
  return (
    <S.Container color={color} {...rest} activeOpacity={0.8}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
