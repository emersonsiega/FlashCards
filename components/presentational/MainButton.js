import React from 'react'
import styled from 'styled-components/native'

import Text from './Text'

const TouchableMainColored = styled.TouchableOpacity`
    padding: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.main};
    opacity: ${props => props.disabled ? 0.5 : 1};
    border-radius: 5px;
    height: 87px;
    width: 100%;
`

const MainButton = ({text, onPress, disabled=false}) => (
    <TouchableMainColored
        onPress={onPress}
        disabled={disabled}
    >
        <Text>{text}</Text>
    </TouchableMainColored>
)

export default MainButton