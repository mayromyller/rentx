import styled from 'styled-components/native'

import { TouchableOpacity } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 126px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  margin-bottom: 16px;
`

export const Flex = styled.View``

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivoMedium};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivoMedium};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`

export const Box = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 16px;
`

export const Wrapper = styled.View`
  margin-right: 24px;
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
  font-size: ${RFValue(15)}px;
`

export const Type = styled.View``

export const Image = styled.Image`
  width: 167px;
  height: 85px;
`
