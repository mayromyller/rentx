import AccelerationSVG from '../assets/acceleration.svg'
import ExchangeSVG from '../assets/exchange.svg'
import GasolineSVG from '../assets/gasoline.svg'
import PeoplelSVG from '../assets/people.svg'
import EnergySVG from '../assets/energy.svg'
import HybridSVG from '../assets/hybrid.svg'
import SpeedSVG from '../assets/speed.svg'
import ForceSVG from '../assets/force.svg'
import CarSVG from '../assets/car.svg'

export default function IconType(type: string) {
  switch (type) {
    case 'speed':
      return SpeedSVG
    case 'acceleration':
      return AccelerationSVG
    case 'turning_diameter':
      return ForceSVG
    case 'electric_motor':
      return EnergySVG
    case 'gasoline_motor':
      return GasolineSVG
    case 'hybrid_motor':
      return HybridSVG
    case 'exchange':
      return ExchangeSVG
    case 'seats':
      return PeoplelSVG
    default:
      return CarSVG
  }
}
