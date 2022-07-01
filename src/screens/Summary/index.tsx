import React, { useState, useEffect } from 'react'

import { StatusBar, Alert } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { RFValue } from 'react-native-responsive-fontsize'
import { format, addDays } from 'date-fns'

import { SummaryNavigationProps } from '../../@types/navigation'

import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { Slider } from '../../components/Slider'
import { Item } from '../../components/Item'

import IconType from '../../utils/carIcons'
import api from '../../services/api'

import * as S from './style'

type RentalPeriodProps = {
  start: string
  end: string
}

export function Summary() {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>(
    {} as RentalPeriodProps
  )
  const [loading, setLoading] = useState(false)

  const { colors } = useTheme()

  const navigation = useNavigation()
  const route = useRoute()
  const data = route.params as SummaryNavigationProps

  function handleBack() {
    navigation.goBack()
  }

  async function handleNavigation() {
    setLoading(true)

    const response = await api.get(`/schedules_bycars/${data.car.id}`)

    const unavailable_dates = [
      ...response.data.unavailable_dates,
      ...data.dates
    ]

    await api.post('schedules_byuser', {
      user_id: 1,
      car: data.car
    })

    await api
      .put(`/schedules_bycars/${data.car.id}`, {
        id: data.car.id,
        unavailable_dates
      })
      .then(() => navigation.navigate('done'))
      .catch(() =>
        Alert.alert('Aluguel', 'Não foi possível confirmar o agendamento')
      )
      .finally(() => setLoading(false))
  }

  const totalPriceRent = Number(data.dates.length) * data.car.rent.price

  useEffect(() => {
    setRentalPeriod({
      start: format(addDays(new Date(data.dates[0]), 1), 'dd/MM/yyyy'),
      end: format(
        addDays(new Date(data.dates[data.dates.length - 1]), 1),
        'dd/MM/yyyy'
      )
    })
  }, [])

  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <S.Header>
        <BackButton onPress={handleBack} />
      </S.Header>

      <S.Wrapper>
        <Slider imagesUrl={data.car.photos} />
      </S.Wrapper>

      <S.Content>
        <S.Flex>
          <S.Box>
            <S.Brand>{data.car.brand}</S.Brand>
            <S.Name>{data.car.name}</S.Name>
          </S.Box>

          <S.Box>
            <S.Text>{data.car.rent.period}</S.Text>
            <S.Heading>R$ {data.car.rent.price}</S.Heading>
          </S.Box>
        </S.Flex>

        <S.Grid>
          {data.car.accessories.map((item) => (
            <Item key={item.type} name={item.name} icon={IconType(item.type)} />
          ))}
        </S.Grid>

        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} color={colors.shape} />
          </S.CalendarIcon>

          <S.DateInfo>
            <S.Info>DE</S.Info>
            <S.Date>{rentalPeriod.start}</S.Date>
          </S.DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={colors.text}
          />

          <S.DateInfo>
            <S.Info>ATÉ</S.Info>
            <S.Date>{rentalPeriod.end}</S.Date>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.Flex>
          <S.DateInfo>
            <S.Info>Total</S.Info>
            <S.Label>
              R$ {data.car.rent.price} x {data.dates.length} diárias
            </S.Label>
          </S.DateInfo>

          <S.Price>R$ {totalPriceRent}</S.Price>
        </S.Flex>
      </S.Content>

      <S.Footer>
        <Button
          title="Alugar Agora"
          color={colors.success}
          onPress={handleNavigation}
          loading={loading}
        />
      </S.Footer>
    </S.Container>
  )
}
