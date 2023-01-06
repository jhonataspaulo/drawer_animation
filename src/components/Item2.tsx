import React from 'react'
import {Image} from 'react-native'
import {Box} from './shared/Box'
import {Icon} from './shared/Icon'
import {Space} from './shared/Space'
import {TextBase} from './shared/TextBase'

type Props = {
  image: string
  title: string
  artist: string
}

export const ItemMusic2: React.FC<Props> = ({artist, image, title}) => {
  return (
    <Box style={{width: '100%'}} flexDirection="row" align="center" mb={16}>
      <Box
        style={{width: 60, height: 60, borderRadius: 12, overflow: 'hidden'}}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={{
            uri: image,
          }}
        />
      </Box>
      <Space w={16} />
      <Box flexBox flexDirection="row" justify="space-between" align="center">
        <Box>
          <TextBase style={{fontWeight: 'bold'}} numberOfLines={1}>
            {title}
          </TextBase>
          <TextBase style={{maxWidth: '100%'}} numberOfLines={1}>
            {artist}
          </TextBase>
        </Box>
        <Icon name="waveform" type="MaterialCommunityIcons" size={24} />
      </Box>
    </Box>
  )
}
