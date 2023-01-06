import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import Foundation from 'react-native-vector-icons/Foundation'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const icons = {
  MaterialCommunityIcons: MaterialCommunityIcons,
  MaterialIcons: MaterialIcons,
  AntDesign: AntDesign,
  Entypo: Entypo,
  EvilIcons: EvilIcons,
  FontAwesome: FontAwesome,
  Fontisto: Fontisto,
  Ionicons: Ionicons,
  Octicons: Octicons,
  SimpleLineIcons: SimpleLineIcons,
  Feather: Feather,
  Foundation: Foundation,
  FontAwesome5: FontAwesome5,
}

type Props = {
  type: keyof typeof icons
  name: string
  size?: number
  color?: string
}

export const Icon = ({type, size, name, color}: Props) => {
  const Component = icons[type]

  return <Component name={name} size={size} color={color} />
}
