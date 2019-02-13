import React from 'react'
import { ThemeProvider as Provider } from 'styled-components/native'

const theme = {
  text: '#EFEFEF',
  subText: '#8A8A8A',
  textDark: '#333',
  inactiveMenu: '#8A8A8A',
  headerBackground: '#242424',
  background: '#333',
  main: '#363CBC',

  defaultBorder: '#EE8F59',
  successBorder: '#B4E99A',

  inactiveBorder: '#989898',
  success: '#5DBB30',
  error: '#EE5959',
  cardColors: [
    '#363CBC',
    '#EE5959',
    '#EE8F59',
    '#29978A',
    '#B22BB4',
    '#5DBB30',
    '#297D97',
    '#F79595',
    '#CC427C',
    '#A04141',
  ],
}

const ThemeProvider = ({ children }) => <Provider theme={theme}>{children}</Provider>

export { theme }

export default ThemeProvider
