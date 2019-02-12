import React from 'react'
import styled from 'styled-components'

const InputGroupContainer = styled.View`
  width: 100%;
`

const Title = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.subText};
`

const Input = styled.TextInput`
  border-bottom-width: 0.5px;
  border-bottom-color: ${props => props.theme.inactiveBorder};
  font-size: 22px;
  padding: 5px;
  margin: 5px;
  color: ${props => props.theme.text};
  background: ${props => props.theme.background};
  margin-bottom: 20px;
`

const InputGroup = ({ title, placeholder = '', value, onChange, ...props }) => (
  <InputGroupContainer>
    <Title>{title}</Title>
    <Input {...props} placeholder={placeholder} value={value} onChangeText={onChange} />
  </InputGroupContainer>
)

export default InputGroup
