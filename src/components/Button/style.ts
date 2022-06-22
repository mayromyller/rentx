import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

type ButtonProps = {
  color?: string
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.main};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivoMedium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
`
