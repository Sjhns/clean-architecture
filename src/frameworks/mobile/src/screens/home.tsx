import { Text, View } from 'react-native'
import { Header } from '../components/layout/header'
import { BarOptions } from '../components/layout/bar-options'
import { CarouselSmallCards } from '../components/layout/carousel-small-cards'
import { CarouselBigCards } from '../components/layout/carousel-big-cards'

export const Home = () => {
  return (
    <View className="flex-1 px-3 pt-3 ">
      <Header />
      <Text className="mt-[3px]">Vamos começar a explorar?</Text>
      <BarOptions />
      <CarouselSmallCards />
      <CarouselBigCards />
      <View className="mt-28" />
    </View>
  )
}
