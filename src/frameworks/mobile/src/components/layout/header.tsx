import { Text, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { SearchInput } from '../common/search-input'

type HeaderProps = {
  userCurrentLocation: string
}

export const Header = ({ userCurrentLocation }: HeaderProps) => {
  const handleRentPress = () => {
    console.log('I need to rent pressed')
  }

  const handleBuyPress = () => {
    console.log('I need to buy pressed')
  }

  return (
    <View className="space-y-6 my-3">
      <View>
        <Text className="text-[#7D7F88] text-sm tracking-wider mb-1">
          Find your place in
        </Text>
        <View className="flex-row items-center">
          <MaterialIcons name="location-on" size={30} color={'#6246EA'} />

          <View className="flex-row items-center justify-center space-x-3">
            <Text className="text-[#1A1E25] font-semibold text-2xl">
              {userCurrentLocation}
            </Text>
          </View>
        </View>
      </View>

      <View>
        <SearchInput />
      </View>

      <View className="space-y-2">
        <Text className="text-[#1A1E25] tracking-widest font-semibold text-lg">
          What do you need?
        </Text>

        <View
          className="bg-[#F2F2F3] border-[.8px] border-[#E3E3E7] h-[59px]
          overflow-hidden px-2 py-[5px] rounded-full flex-row items-center 
          justify-between space-x-1"
        >
          <TouchableOpacity
            onPress={handleRentPress}
            className="bg-[#6246EA] shadow-lg h-full flex-1 rounded-full items-center
            justify-center
          "
          >
            <Text className="text-[#FDFDFD] tracking-widest font-medium text-base">
              I need to rent
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleBuyPress}
            className="bg-transparent h-full flex-1 rounded-full 
            items-center justify-center"
          >
            <Text className="text-[#7D7F88] tracking-tighter text-base">
              I need to buy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
