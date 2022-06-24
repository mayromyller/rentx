import React from 'react'

import { View, StatusBar } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { useTheme } from 'styled-components'

import { BackButton } from '../../components/BackButton'
import { Calendar } from '../../components/Calendar'
import { Button } from '../../components/Button'

import ArrowSVG from '../../assets/arrow.svg'

import * as S from './style'

export function Scheduling() {
  const { colors } = useTheme()

  const navigation = useNavigation()

  function handleBack() {
    navigation.goBack()
  }

  function handleNavigation() {
    navigation.navigate('summary')
  }

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <S.Header>
        <View style={{ alignSelf: 'flex-start' }}>
          <BackButton
            onPress={handleBack}
            color={colors.shape}
            borderColor={colors.shape_dark}
          />
        </View>

        <S.Title>
          Escolha uma {`\n`}
          data de início e {`\n`}
          fim do aluguel
        </S.Title>

        <S.Wrapper>
          <S.DateInfo>
            <S.Text>DE</S.Text>
            <S.DateValue selected={false}>22/07/2022</S.DateValue>
          </S.DateInfo>

          <ArrowSVG />

          <S.DateInfo>
            <S.Text>ATÉ</S.Text>
            <S.DateValue selected={false}>22/07/2022</S.DateValue>
          </S.DateInfo>
        </S.Wrapper>
      </S.Header>

      <S.Content>
        <Calendar />
      </S.Content>

      <S.Footer>
        <Button title="Confirmar" onPress={handleNavigation} />
      </S.Footer>
    </S.Container>
  )
}
