import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.colors.header};
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 32px 24px;
`

export const Text = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.interRegular};
  color: ${({ theme }) => theme.colors.text};
`

export const FloatingButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.main};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 22px;
  right: 24px;
`
