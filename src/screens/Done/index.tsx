import React from 'react'

import { useWindowDimensions, StatusBar } from 'react-native'
import { useTheme } from 'styled-components'

import { Button } from '../../components/Button'

import LogoSVG from '../../assets/logo_background_gray.svg'
import DoneSVG from '../../assets/done.svg'

import * as S from './style'

export function Done() {
  const { width } = useWindowDimensions()
  const { colors } = useTheme()

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSVG width={width} />

      <S.Content>
        <DoneSVG width={80} height={80} />

        <S.Title>Carro alugado!</S.Title>

        <S.Paragraph>
          Agora você só precisa ir {`\n`}
          até a concessionária da RENTX {`\n`}
          pegar o seu automóvel.
        </S.Paragraph>

        <S.Box>
          <Button title="Ok" color={colors.shape_dark} />
        </S.Box>
      </S.Content>
    </S.Container>
  )
}
