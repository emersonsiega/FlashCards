import React from 'react'
import { AppLoading } from 'expo'
import styled from 'styled-components/native'

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Text = styled.Text`
  color: ${props => props.theme.subText};
  font-size: 20px;
`

const withLoading = InputComponent => ({ isLoading = true, children, ...props }) => {
  if (isLoading) {
    return (
      <Center>
        <AppLoading />
        <Text>Loading...</Text>
      </Center>
    )
  }

  return <InputComponent {...props}>{children}</InputComponent>
}

export default withLoading
