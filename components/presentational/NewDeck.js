import React, { Component } from 'react'
import styled from 'styled-components/native'

import { theme } from './ThemeProvider'
import MainButton from './MainButton'
import Text from './Text'

const View = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: space-between;
    margin: 10px;
`

const Title = styled.Text`
    font-size: 25px;
    color: ${props => props.theme.textDark};
`

const Input = styled.TextInput`
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.border};
    box-shadow: 0px 1px 1px ${props => props.theme.border};
    font-size: 22px;
    padding: 5px;
    margin: 2px;
    color: ${props => props.theme.inactiveMenu};
`

const InputGroup = styled.View``

const Colors = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`

const Color = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background: ${props => props.color};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin: 5px;
    box-shadow: 0px 0px 3px ${props => props.selected ? props.theme.success : props.theme.border};
    border: ${props => props.selected ? 1 : 0}px solid ${props => props.theme.success};
`

class NewDeck extends Component {
    state = {
        title: '',
        color: ''
    }

    handleTitleChange = (text) => {
        this.setState( () => ({
            title: text
        }) )
    }

    handleColorChange = (color) => {
        this.setState( () => ({
            color
        }))
    }

    handleAddDeck = () => {
        const {onAddDeck} = this.props
        const {title, color} = this.state

        onAddDeck({
            title,
            color,
            questions: []
        })

        this.setState(() => ({
            title: '',
            color: '',
        }))
    }

    canAddDeck = () => this.state.color.length > 0 && this.state.title.length > 0

    render = () => (
        <View>
            <InputGroup>
                <Title>
                    Title
                </Title>
                <Input 
                    placeholder='Deck title'
                    value={this.state.title}
                    onChangeText={this.handleTitleChange}
                />
            </InputGroup>
            <InputGroup>
                <Title>
                    Color
                </Title>
                <Colors>
                    {theme.cardColors.map( color => (
                        <Color 
                            key={color}
                            color={color}
                            onPress={() => this.handleColorChange(color)}
                            selected={color === this.state.color}
                        >
                            <Text>
                                T
                            </Text>
                        </Color>
                    ) )}
                </Colors>
            </InputGroup>
            <MainButton 
                disabled={!this.canAddDeck()}
                text='ADD DECK'
                onPress={this.handleAddDeck}
            />
        </View>
    )
}

export default NewDeck