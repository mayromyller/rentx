import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'

import { useTheme } from 'styled-components'

import { ActivityIndicator, FlatList, StatusBar, View } from 'react-native'
import { BackButton } from '../../components/BackButton'

import { CarProps, Car } from '../../components/Car'

import api from '../../services/api'

import * as S from './style'

type MyCarProps = {
  id: string
  user_id: string
  car: CarProps
}

export function MyCars() {
  const [loading, setLoading] = useState(false)
  const [cars, setCars] = useState<MyCarProps[]>([])

  const { colors } = useTheme()

  const navigation = useNavigation()

  function handleBack() {
    navigation.goBack()
  }

  async function getCarsByUser() {
    try {
      setLoading(true)

      const response = await api.get('/schedules_byuser?user_id=1')

      setCars(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCarsByUser()
  }, [])

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

        <S.Title>Seus agendamentos estão aqui.</S.Title>
        <S.Subtitle>Conforto, segurança e praticidade.</S.Subtitle>
      </S.Header>

      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.main}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />
      ) : (
        <S.Content>
          <S.Flex>
            <S.Text>Agendamentos feitos</S.Text>
            <S.Label>{cars.length}</S.Label>
          </S.Flex>

          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Car data={item.car} />}
            showsVerticalScrollIndicator={false}
          />
        </S.Content>
      )}
    </S.Container>
  )
}
