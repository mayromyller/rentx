import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
  padding-top: 96px;
`

export const Content = styled.View`
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivoMedium};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;
  margin-top: 32px;
`

export const Paragraph = styled.Text`
  font-family: ${({ theme }) => theme.fonts.interRegular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
  line-height: 25px;
  text-align: center;
  margin-top: 24px;
`

export const Box = styled.View`
  width: 80px;
  margin-top: 86px;
`
