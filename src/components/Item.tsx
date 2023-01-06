import React from 'react'
import {Image} from 'react-native'
import {Box} from './shared/Box'
import {Space} from './shared/Space'
import {TextBase} from './shared/TextBase'

type Props = {
  image: string
  title: string
  artist: string
}

export const ItemMusic1: React.FC<Props> = ({artist, image, title}) => {
  return (
    <Box style={{width: 100}}>
      <Box
        style={{width: 100, height: 100, borderRadius: 16, overflow: 'hidden'}}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={{
            uri: image,
          }}
        />
      </Box>
      <Space h={4} />
      <TextBase style={{fontWeight: 'bold'}} numberOfLines={1}>
        {title}
      </TextBase>
      <TextBase style={{maxWidth: '100%'}} numberOfLines={1}>
        {artist}
      </TextBase>
    </Box>
  )
}
