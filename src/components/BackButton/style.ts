import styled from 'styled-components/native'

import { Pressable } from 'react-native'

type BorderColor = {
  borderColor?: string
}

export const Container = styled(Pressable)<BorderColor>`
  padding: 7px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid
    ${({ theme, borderColor }) =>
      borderColor ? borderColor : theme.colors.background_primary};
`
