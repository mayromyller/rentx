import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { BackButton } from '../../components/BackButton'
import { Item } from '../../components/Item'
import { Slider } from '../../components/Slider'

import SpeedSVG from '../../assets/speed.svg'
import AccelerationSVG from '../../assets/acceleration.svg'
import ForceSVG from '../../assets/force.svg'
import GasolineSVG from '../../assets/gasoline.svg'
import ExchangeSVG from '../../assets/exchange.svg'
import PeoplelSVG from '../../assets/people.svg'

import * as S from './style'
import { Button } from '../../components/Button'

export function Car() {
  const navigation = useNavigation()

  function handleBack() {
    navigation.goBack()
  }

  function handleNavigation() {
    navigation.navigate('scheduling')
  }

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={handleBack} />
      </S.Header>

      <S.Wrapper>
        <Slider
          imagesUrl={[
            'https://www.pngmart.com/files/10/Lamborghini-Huracan-Transparent-Background.png'
          ]}
        />
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
          <Item name="2 pessoas" icon={PeoplelSVG} />
        </S.Grid>

        <S.Paragraph>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </S.Paragraph>
      </S.Content>

      <S.Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleNavigation}
        />
      </S.Footer>
    </S.Container>
  )
}
