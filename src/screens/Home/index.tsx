import React, { useEffect, useState } from 'react'
import { FlatList, StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'

import { Car, CarProps } from '../../components/Car'
import Logo from '../../assets/logo.svg'

import api from '../../services/api'

import * as S from './style'

export function Home() {
  const [car, setCar] = useState<CarProps[]>([])

  const navigation = useNavigation()

  function handleNavigation(car: CarProps) {
    navigation.navigate('car', { car })
  }

  function handleNavigateToMyCars() {
    navigation.navigate('mycars')
  }

  async function getCar() {
    try {
      const response = await api.get('/cars')

      setCar(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCar()
  }, [])

  return (
    <S.Container>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <S.Header>
        <Logo width={RFValue(108)} height={RFValue(12)} />

        <S.Text>
          Total de {car.length} {car.length > 1 ? 'carros' : 'carro'}
        </S.Text>
      </S.Header>

      <FlatList
        data={car}
        contentContainerStyle={{
          paddingHorizontal: 24
        }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Car data={item} onPress={() => handleNavigation(item)} />
        )}
        style={{
          marginTop: 16
        }}
      />
      <S.FloatingButton onPress={handleNavigateToMyCars}>
        <Ionicons name="car-sport" size={32} color="white" />
      </S.FloatingButton>
    </S.Container>
  )
}
