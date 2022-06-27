import React from 'react'

import {
  Calendar as CalendarProvider,
  LocaleConfig,
  DateData
} from 'react-native-calendars'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import { ptBR } from './localeConfig'

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

export type MarketDateProps = {
  [date: string]: {
    color: string
    textColor: string
    disabled?: boolean
    disableTouchEvent?: boolean
  }
}

export type DayProps = {
  year: number
  month: number
  day: number
  timestamp: number
  dateString: string
}

type CalendarProps = {
  markedDates: MarketDateProps
  onDayPress: (date: DateData) => void
}

export function Calendar({ markedDates, onDayPress }: CalendarProps) {
  const { colors, fonts } = useTheme()
  return (
    <CalendarProvider
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={colors.text}
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      )}
      headerStyle={{
        backgroundColor: colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10
      }}
      theme={{
        textDayFontFamily: fonts.interRegular,
        textDayHeaderFontFamily: fonts.archivoRegular,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        textMonthFontFamily: fonts.archivoMedium,
        monthTextColor: colors.title,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}
      firstDay={1}
      minDate={String(new Date())}
      onDayPress={onDayPress}
      markedDates={markedDates}
      markingType="period"
    />
  )
}
