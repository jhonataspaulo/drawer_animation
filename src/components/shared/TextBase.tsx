import React from 'react'
import {TextProps, Text} from 'react-native'
import styled, {css} from 'styled-components/native'

type Props = TextProps & {
  color?: string
  fz?: number
  ff?: string
  a?: 'center' | 'flex-start' | 'flex-end'
  ta?: 'left' | 'right' | 'center' | 'justify'
  tt?: 'capitalize' | 'lowercase' | 'uppercase'
  flex?: boolean
}

export const TextBase: React.FC<Props> = props => {
  return <Container {...props}>{props.children}</Container>
}

const Container = styled(Text)<Props>`
  color: ${p => (p.color ? p.color : '#000')};
  font-size: ${({fz}) => (fz ? fz : 16)}px;
  text-transform: ${p => (p.tt ? p.tt : 'none')};
  ${props =>
    props.a &&
    css`
      align-self: ${props.a};
    `}

  ${props =>
    props.ta &&
    css`
      text-align: ${props.ta};
    `}

    ${props =>
    props.flex &&
    css`
      flex: 1;
    `}
`
