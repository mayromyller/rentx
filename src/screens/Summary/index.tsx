import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { RFValue } from 'react-native-responsive-fontsize'

import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { Slider } from '../../components/Slider'
import { Item } from '../../components/Item'

import SpeedSVG from '../../assets/speed.svg'
import AccelerationSVG from '../../assets/acceleration.svg'
import ForceSVG from '../../assets/force.svg'
import GasolineSVG from '../../assets/gasoline.svg'
import ExchangeSVG from '../../assets/exchange.svg'
import PeopleSVG from '../../assets/people.svg'

import * as S from './style'

export function Summary() {
  const { colors } = useTheme()

  const navigation = useNavigation()

  function handleBack() {
    navigation.goBack()
  }

  function handleNavigation() {
    navigation.navigate('done')
  }

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={handleBack} />
      </S.Header>

      <S.Wrapper>
        <Slider imagesUrl={['https://github.com/mayromyller.png']} />
      </S.Wrapper>

      <S.Content>
        <S.Flex>
          <S.Box>
            <S.Brand>Lamborghini</S.Brand>
            <S.Name>Huracan</S.Name>
          </S.Box>

          <S.Box>
            <S.Text>Ao dia</S.Text>
            <S.Heading>R$ 580</S.Heading>
          </S.Box>
        </S.Flex>

        <S.Grid>
          <Item name="380km/h" icon={SpeedSVG} />
          <Item name="3.2s" icon={AccelerationSVG} />
          <Item name="800 HP" icon={ForceSVG} />
          <Item name="Gasolina" icon={GasolineSVG} />
          <Item name="Auto" icon={ExchangeSVG} />
          <Item name="2 pessoas" icon={PeopleSVG} />
        </S.Grid>

        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} color={colors.shape} />
          </S.CalendarIcon>

          <S.DateInfo>
            <S.Info>DE</S.Info>
            <S.Date>22/06/2022</S.Date>
          </S.DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={colors.text}
          />

          <S.DateInfo>
            <S.Info>ATÉ</S.Info>
            <S.Date>22/06/2022</S.Date>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.Flex>
          <S.DateInfo>
            <S.Info>Total</S.Info>
            <S.Label>R$ 580 x 3 diárias</S.Label>
          </S.DateInfo>

          <S.Price>R$ 2.900</S.Price>
        </S.Flex>
      </S.Content>

      <S.Footer>
        <Button
          title="Alugar Agora"
          color={colors.success}
          onPress={handleNavigation}
        />
      </S.Footer>
    </S.Container>
  )
}
