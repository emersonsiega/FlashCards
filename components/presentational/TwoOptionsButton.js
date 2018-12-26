import React from 'react'
import styled from 'styled-components/native'

import Text from './Text'

const View = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 6px ${props => props.theme.border};
`

const LeftButton = styled.TouchableOpacity`
    padding: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.success};
    opacity: ${props => props.disabled ? 0.5 : 1};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    height: 87px;
    flex: 1;
`

const RightButton = styled(LeftButton)`
    background-color: ${props => props.theme.main};
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`

const TwoOptionsButton = ({
    textLeft, 
    onPressLeft, 
    disabledLeft = false, 
    textRight, 
    onPressRight,
    disabledRight = false, 
}) => (
    <View>
        <LeftButton 
            onPress={onPressLeft} 
            disabled={disabledLeft}
        >
            <Text>
                {textLeft}
            </Text>
        </LeftButton>
        <RightButton 
            onPress={onPressRight}
            disabled={disabledRight}
        >
            <Text>
                {textRight}
            </Text>
        </RightButton>
    </View>
)

export default TwoOptionsButton