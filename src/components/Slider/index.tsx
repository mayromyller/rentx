import React from 'react'

import * as S from './style'

type Props = {
  imagesUrl: string[]
}

export function Slider({ imagesUrl }: Props) {
  return (
    <S.Container>
      <S.Indexes>
        <S.Index active={true} />
        <S.Index active={false} />
        <S.Index active={false} />
        <S.Index active={false} />
      </S.Indexes>

      <S.Wrapper>
        <S.Image
          source={{
            uri: 'https://www.pngmart.com/files/10/Lamborghini-Huracan-Transparent-Background.png'
          }}
          resizeMode="contain"
        />
      </S.Wrapper>
    </S.Container>
  )
}
