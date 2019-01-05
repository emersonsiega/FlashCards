import React from 'react'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

const styles = StyleSheet.create({
  children: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})

const View = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.background};
`
const ScrollView = props => (
  <View contentContainerStyle={styles.children} {...props}>
    {props.children}
  </View>
)

export default ScrollView
