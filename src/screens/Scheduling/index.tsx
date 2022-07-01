import React, { useState } from 'react'

import { View, StatusBar, Alert } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'

import { useTheme } from 'styled-components'

import { format, addDays } from 'date-fns'

import { Calendar, DayProps, MarketDateProps } from '../../components/Calendar'
import { generateInterval } from '../../components/Calendar/generateInterval'
import { DetailsCarNavigation } from '../../@types/navigation'
import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'

import ArrowSVG from '../../assets/arrow.svg'

import * as S from './style'

type RentalPeriodProps = {
  startFormatted: string
  endFormatted: string
}

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  )
  const [markedDates, setMarkedDates] = useState<MarketDateProps>(
    {} as MarketDateProps
  )
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>(
    {} as RentalPeriodProps
  )

  const { colors } = useTheme()

  const navigation = useNavigation()
  const route = useRoute()
  const data = route.params as DetailsCarNavigation

  function handleBack() {
    navigation.goBack()
  }

  function handleNavigation() {
    const { car } = data

    navigation.navigate('summary', {
      car,
      dates: Object.keys(markedDates)
    })
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
    let end = date

    if (start.timestamp > end.timestamp) {
      start = end
      end = start
    }

    setLastSelectedDate(end)
    const interval = generateInterval(start, end)
    setMarkedDates(interval)

    const firstDate = Object.keys(interval)[0]
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1]

    setRentalPeriod({
      startFormatted: format(addDays(new Date(firstDate), 1), 'dd/MM/yyy'),
      endFormatted: format(addDays(new Date(endDate), 1), 'dd/MM/yyyy')
    })
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
            <S.DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </S.DateValue>
          </S.DateInfo>

          <ArrowSVG />

          <S.DateInfo>
            <S.Text>ATÉ</S.Text>
            <S.DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </S.DateValue>
          </S.DateInfo>
        </S.Wrapper>
      </S.Header>

      <S.Content>
        <Calendar onDayPress={handleChangeDate} markedDates={markedDates} />
      </S.Content>

      <S.Footer>
        <Button
          title="Confirmar"
          onPress={handleNavigation}
          disabled={!rentalPeriod.startFormatted}
        />
      </S.Footer>
    </S.Container>
  )
}
