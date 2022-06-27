import React from 'react'

import { StatusBar } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'

import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { Slider } from '../../components/Slider'
import { Item } from '../../components/Item'

import { CarNavigationProps } from '../../@types/navigation'

import * as S from './style'
import IconType from '../../utils/carIcons'

export function Car() {
  const navigation = useNavigation()
  const route = useRoute()

  const data = route.params as CarNavigationProps

  function handleBack() {
    navigation.goBack()
  }

  function handleNavigation() {
    navigation.navigate('scheduling')
  }

  const {
    about,
    brand,
    name,
    rent,
    thumbnail,
    fuel_type,
    accessories,
    photos
  } = data.car

  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <S.Header>
        <BackButton onPress={handleBack} />
      </S.Header>

      <S.Wrapper>
        <Slider
          imagesUrl={[
            'https://www.pngmart.com/files/10/Lamborghini-Huracan-Transparent-Background.png'
          ]}
        />
      </S.Wrapper>

      <S.Content>
        <S.Flex>
          <S.Box>
            <S.Brand>{brand}</S.Brand>
            <S.Name>{name}</S.Name>
          </S.Box>

          <S.Box>
            <S.Text>{rent.period}</S.Text>
            <S.Heading>{rent.price}</S.Heading>
          </S.Box>
        </S.Flex>

        <S.Grid>
          {accessories.map((item) => (
            <Item key={item.name} name={item.name} icon={IconType(item.type)} />
          ))}
        </S.Grid>

        <S.Paragraph>{about}</S.Paragraph>
      </S.Content>

      <S.Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleNavigation}
        />
      </S.Footer>
    </S.Container>
  )
}
