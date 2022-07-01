import React, { useRef, useState } from 'react'
import { FlatList, ViewToken } from 'react-native'

import * as S from './style'

type Props = {
  imagesUrl: string[]
}

type SlideProps = {
  viewableItems: ViewToken[]
  changed: ViewToken[]
}

export function Slider({ imagesUrl }: Props) {
  const [imageIndex, setImageIndex] = useState(0)

  const indexChanged = useRef((info: SlideProps) => {
    const index = info.viewableItems[0].index!
    setImageIndex(index)
  })

  return (
    <S.Container>
      <S.Indexes>
        {imagesUrl.map((_, index) => (
          <S.Index key={String(index)} active={index === imageIndex} />
        ))}
      </S.Indexes>

      <FlatList
        data={imagesUrl}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <S.Wrapper>
            <S.Image
              source={{
                uri: item
              }}
              resizeMode="contain"
            />
          </S.Wrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={indexChanged.current}
      />
    </S.Container>
  )
}
