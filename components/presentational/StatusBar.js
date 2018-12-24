import React from 'react'
import { StatusBar as ReactStatusBar } from 'react-native'
import { Constants } from 'expo'
import styled from 'styled-components/native'

const View = styled.View`
    background-color: ${props => props.theme.headerBackground};
    height: ${props => props.height};
`

const StatusBar = () => (
    <View height={Constants.statusBarHeight}>
        <ReactStatusBar translucent barStyle='dark-content' />
    </View>
)

export default StatusBar