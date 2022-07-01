import React from 'react'

import { TouchableOpacityProps, ActivityIndicator } from 'react-native'

import * as S from './style'

type Props = TouchableOpacityProps & {
  title: string
  color?: string
  loading?: boolean
  disabled?: boolean
}

export function Button({
  title,
  color,
  loading,
  disabled = false,
  ...rest
}: Props) {
  return (
    <S.Container
      color={color}
      {...rest}
      activeOpacity={0.8}
      disabled={disabled}
      style={{
        opacity: disabled ? 0.5 : 1
      }}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <S.Title>{title}</S.Title>
      )}
    </S.Container>
  )
}
