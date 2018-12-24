import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'

const View = styled.View`
    flex: 1;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background-color: ${props => props.theme.background};
`

const Text = styled.Text``

const DecksList = ({ decks = [] }) => (
    <View>
        {decks.map( deck => (
            <Text
                key={deck.title}
                background={deck.color}
            >
                {deck.title}
            </Text>
        ))}
    </View>
)

const mapStateToProps = ({decks = {}}) => ({
    decks: Object.values(decks) 
})

export default connect(mapStateToProps)(DecksList)