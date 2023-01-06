import React from 'react'
import {Image} from 'react-native'
import styled from 'styled-components/native'
import {ItemMusic1} from './Item'
import {ItemMusic2} from './Item2'
import {Box} from './shared/Box'
import {Icon} from './shared/Icon'
import {Space} from './shared/Space'
import {TextBase} from './shared/TextBase'

type Props = {}

export const Home: React.FC<Props> = () => {
  return (
    <Container>
      <Space h={16} />
      <TextBase fz={35} style={{fontWeight: 'bold'}}>
        My musics
      </TextBase>
      <Space h={16} />
      <Box
        style={{
          width: '100%',
          height: 200,
          borderRadius: 16,
          overflow: 'hidden',
          elevation: 10,
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          source={{
            uri: 'https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
        />
      </Box>
      <Space h={32} />
      <Box flexDirection="row" justify="space-between">
        <TextBase fz={20} style={{fontWeight: 'bold'}}>
          New Albums
        </TextBase>
        <Box flexDirection="row" align="center">
          <TextBase fz={16} color="#333">
            See All
          </TextBase>
          <Space w={4} />
          <Icon name="right" type="AntDesign" size={14} color="#333" />
        </Box>
      </Box>
      <Space h={16} />
      <Box flexDirection="row" justify="space-between">
        <ItemMusic1
          title="Oh Caroline"
          artist="The 1975"
          image="https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <ItemMusic1
          title="Southern Comfort"
          artist="Larkin Poe"
          image="https://images.pexels.com/photos/4491536/pexels-photo-4491536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <ItemMusic1
          title="Many Mirrors"
          artist="Alvvays"
          image="https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Box>
      <Space h={24} />
      <Box flexDirection="row" justify="space-between">
        <TextBase fz={20} style={{fontWeight: 'bold'}}>
          Song List
        </TextBase>
        <Box flexDirection="row" align="center">
          <TextBase fz={16} color="#333">
            See All
          </TextBase>
          <Space w={4} />
          <Icon name="right" type="AntDesign" size={14} color="#333" />
        </Box>
      </Box>
      <Space h={16} />
      <Box justify="space-between">
        <ItemMusic2
          title="Oh Caroline"
          artist="The 1975"
          image="https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <ItemMusic2
          title="Southern Comfort"
          artist="Larkin Poe"
          image="https://images.pexels.com/photos/4491536/pexels-photo-4491536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <ItemMusic2
          title="Many Mirrors"
          artist="Alvvays"
          image="https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Box>
    </Container>
  )
}

const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: #fff;
  padding: 0 24px;
`
