import React from 'react'
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons'

import { theme } from './ThemeProvider'
import DecksListContainer from '../container/DecksListContainer'
import NewDeckContainer from '../container/NewDeckContainer'
import DeckViewContainer from '../container/DeckViewContainer'

const BottomNavigator = createBottomTabNavigator(
  {
    Decks: {
      screen: DecksListContainer,
      navigationOptions: {
        tabBarLabel: 'DECKS',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="cards" size={30} color={tintColor} />
        ),
      },
    },
    NewDeck: {
      screen: NewDeckContainer,
      navigationOptions: {
        tabBarLabel: 'NEW DECK',
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="add-box" size={30} color={tintColor} />
        ),
      },
    },
    Stats: {
      screen: DecksListContainer,
      navigationOptions: {
        tabBarLabel: 'STATS',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-podium" size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      style: {
        height: 56,
        backgroundColor: theme.headerBackground,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
      },
      activeTintColor: theme.text,
      inactiveTintColor: theme.inactiveMenu,
    },
  }
)

const StackNavigator = createStackNavigator({
  Home: {
    screen: BottomNavigator,
  },
  DeckView: {
    screen: DeckViewContainer,
    navigationOptions: {
      title: 'Deck',
      headerTintColor: theme.text,
      headerStyle: {
        backgroundColor: theme.headerBackground,
      },
      headerTitleStyle: {
        fontSize: 25,
      },
    },
  },
})

export default createAppContainer(StackNavigator)
