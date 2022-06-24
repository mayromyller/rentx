import React from 'react'
import { FlatList, StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { useNavigation } from '@react-navigation/native'

import { Car } from '../../components/Car'
import Logo from '../../assets/logo.svg'

import * as S from './style'

export function Home() {
  const car = {
    brand: 'Audi',
    name: 'RS Coupé',
    rent: {
      period: 'Ao dia',
      price: 120
    },
    thumbnail:
      'https://www.pngmart.com/files/10/Lamborghini-Huracan-Transparent-Background.png'
  }

  const navigation = useNavigation()

  function handleNavigation() {
    navigation.navigate('car')
  }

  return (
    <S.Container>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <S.Header>
        <Logo width={RFValue(108)} height={RFValue(12)} />

        <S.Text>Total de 12 carros</S.Text>
      </S.Header>

      <FlatList
        data={[1, 2, 3]}
        contentContainerStyle={{
          paddingHorizontal: 24
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Car data={car} onPress={handleNavigation} />}
        style={{
          marginTop: 16
        }}
      />
    </S.Container>
  )
}
