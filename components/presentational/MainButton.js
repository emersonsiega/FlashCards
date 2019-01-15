import React from 'react'
import styled from 'styled-components/native'

import Text from './Text'

const TouchableMainColored = styled.TouchableOpacity`
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  box-shadow: 0px 0px 6px
    ${props =>
      props.disabled
        ? props.theme.inactiveBorder
        : props.border
        ? props.border
        : props.theme.defaultBorder};
  border-width: 0.5px;
  border-color: ${props =>
    props.disabled
      ? props.theme.inactiveBorder
      : props.border
      ? props.border
      : props.theme.defaultBorder};
  border-radius: 100px;
  height: 87px;
  width: ${props => (props.width ? props.width : 100)}px;
`

const MainButton = ({ text, onPress, disabled = false, border = undefined, width }) => (
  <TouchableMainColored
    onPress={onPress}
    disabled={disabled}
    border={border}
    width={width}>
    <Text>{text}</Text>
  </TouchableMainColored>
)

export default MainButton
