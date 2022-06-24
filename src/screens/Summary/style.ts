import styled from 'styled-components/native'

import {
  getBottomSpace,
  getStatusBarHeight
} from 'react-native-iphone-x-helper'

import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 16px;
`

export const Wrapper = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center'
  },
  showsVerticalScrollIndicator: false
})``

export const Flex = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
`

export const Box = styled.View``

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivoMedium};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivoMedium};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(25)}px;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivoMedium};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`

export const Heading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivoMedium};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(25)}px;
`

export const Grid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 16px;
`

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  padding: 24px 24px ${getBottomSpace() + 24}px;
`

export const RentalPeriod = styled.View`
  width: 100%;
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  padding-bottom: 16px;
`

export const CalendarIcon = styled.View`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.main};
`

export const DateInfo = styled.View``

export const Info = styled.Text`
  font-family: ${({ theme }) => theme.fonts.interMedium};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivoMedium};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`

export const Label = styled(Date)``

export const Price = styled(Name)`
  color: ${({ theme }) => theme.colors.success};
`
