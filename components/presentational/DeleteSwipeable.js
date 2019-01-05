import React, { Component } from 'react'
import styled from 'styled-components/native'
import Swipeable from 'react-native-swipeable'
import { FontAwesome } from '@expo/vector-icons'

import { theme } from './ThemeProvider'

const OptionDelete = styled.View`
  height: 80px;
  width: 80px;
  border-radius: 80px;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  background-color: ${props =>
    props.activated ? props.theme.success : props.theme.headerBackground};
  box-shadow: 0px 0px 3px
    ${props => (props.activated ? props.theme.success : props.theme.border)};
`

class DeleteSwipeable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actionActivated: false,
      actionCompleted: false,
    }
  }

  setActivated = isActivated => {
    if (this.state.actionCompleted) return

    console.log('activated: ', isActivated)
    this.setState(() => ({ actionActivated: isActivated }))
  }

  setCompleted = id => {
    console.log('completed')
    this.setState(() => ({ actionCompleted: true }))

    this.props.onComplete(id)
  }

  render() {
    const { id, activationDistance = 150, iconSize = 35, children } = this.props

    const { actionActivated } = this.state

    return (
      <Swipeable
        rightContent={
          <OptionDelete activated={actionActivated}>
            <FontAwesome name="trash-o" size={iconSize} color={theme.textDark} />
          </OptionDelete>
        }
        rightButtonWidth={0}
        rightActionActivationDistance={activationDistance}
        onRightActionActivate={() => this.setActivated(true)}
        onRightActionDeactivate={() => this.setActivated(false)}
        onRightActionComplete={() => this.setCompleted(id)}>
        {children}
      </Swipeable>
    )
  }
}

export default DeleteSwipeable
