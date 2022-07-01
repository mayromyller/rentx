import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`

export const Header = styled.View`
  width: 100%;
  height: 325px;

  background-color: ${({ theme }) => theme.colors.header};
  justify-content: center;
  padding: 25px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.archivoMedium};
  font-size: ${RFValue(30)}px;
  margin-top: 32px;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.archivoMedium};
  font-size: ${RFValue(15)}px;
  margin-top: 16px;
`

export const Content = styled.View`
  padding: 25px;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.interMedium};
  font-size: ${RFValue(15)}px;
`

export const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
`

export const Flex = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`
