import { CarProps } from '../components/Car'

export type DetailsCarNavigation = {
  car: CarProps
}

export type SummaryNavigationProps = {
  car: CarProps
  dates: string[]
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      mycars: undefined
      car: DetailsCarNavigation
      scheduling: DetailsCarNavigation
      summary: SummaryNavigationProps
      done: undefined
    }
  }
}
