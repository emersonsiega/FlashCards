import React from 'react'
import styled from 'styled-components/native'

const View = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const Text = styled.Text`
    font-size: 40px;
    color: ${props => props.theme.textDark};
    text-align: center;
`

const EmptyListText = () => (
    <View>
        <Text>Start your studies creating your own Flashcards 🤓</Text>
    </View>
)

export default EmptyListText