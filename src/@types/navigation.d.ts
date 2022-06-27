import { CarProps } from '../components/Car'

export type CarNavigationProps = {
  car: CarProps
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      car: CarNavigationProps
      scheduling: undefined
      summary: undefined
      done: undefined
    }
  }
}
