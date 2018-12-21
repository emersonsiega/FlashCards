import React from 'react'
import styled from 'styled-components/native'

import MainButton from '../presentational/MainButton'
import TwoOptionsButton from '../presentational/TwoOptionsButton'

const View = styled.View`
    flex: 1;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background-color: ${props => props.theme.background};
`

const DecksList = () => (
    <View>
        <MainButton
            text="Teste"
            onPress={() => alert('hey!')}
        />

        <TwoOptionsButton
            textLeft="START QUIZ"
            onPressLeft={() => alert('hey left!')}
            disabledLeft={true}
            textRight="ADD CARD"
            onPressRight={() => alert('hey right!')}
        />
    </View>
)

export default DecksList