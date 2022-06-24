import 'react-native-gesture-handler'

import React, { useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import * as Font from 'expo-font'

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold
} from '@expo-google-fonts/inter'
import {
  Archivo_400Regular,
  Archivo_500Medium
} from '@expo-google-fonts/archivo'

import { ThemeProvider } from 'styled-components'

import { Routes } from './src/routes/index'

import theme from './src/styles/theme'

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync()

        await Font.loadAsync({
          Inter_400Regular,
          Inter_500Medium,
          Inter_600SemiBold,
          Archivo_400Regular,
          Archivo_500Medium
        })
      } catch (error) {
        console.log(
          `The app doesn't load fonts async, with this error: ${error}`
        )
      } finally {
        setAppIsReady(true)
        await SplashScreen.hideAsync()
      }
    }

    prepare()
  }, [])

  if (!appIsReady) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Routes />
    </ThemeProvider>
  )
}
