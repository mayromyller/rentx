import React from 'react'

import { SvgProps } from 'react-native-svg'

import * as S from './style'

type Props = {
  name: string
  icon: React.FC<SvgProps>
}

export function Item({ name, icon: Icon }: Props) {
  return (
    <S.Container>
      <Icon width={32} height={32} />

      <S.Text>{name}</S.Text>
    </S.Container>
  )
}
