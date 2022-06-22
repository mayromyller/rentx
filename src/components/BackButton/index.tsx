import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import { PressableProps } from 'react-native'
import { useTheme } from 'styled-components'

import * as S from './style'

type Props = PressableProps & {
  color?: string
  borderColor?: string
}

export function BackButton({ color, borderColor, ...rest }: Props) {
  const { colors } = useTheme()
  return (
    <S.Container {...rest} borderColor={borderColor}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : colors.text}
      />
    </S.Container>
  )
}
