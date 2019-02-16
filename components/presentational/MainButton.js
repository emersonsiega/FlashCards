import React from 'react'
import styled from 'styled-components/native'

import Text from './Text'

const ButtonText = styled(Text)`
  font-size: 22px;
`

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
  height: 67px;
  width: ${props => (props.width ? props.width : 100)}px;
`

const MainButton = ({
  text,
  onPress,
  disabled = false,
  border = undefined,
  width = 130,
  ...props
}) => (
  <TouchableMainColored
    onPress={onPress}
    disabled={disabled}
    border={border}
    width={width}
    {...props}>
    <ButtonText>{text}</ButtonText>
  </TouchableMainColored>
)

export default MainButton
