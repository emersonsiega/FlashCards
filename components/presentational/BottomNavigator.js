import React from 'react'
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons'

import { theme } from './ThemeProvider'
import { routes } from '../../routes'

import DecksListContainer from '../container/DecksListContainer'
import NewDeckContainer from '../container/NewDeckContainer'
import StatsViewContainer from '../container/StatsViewContainer'
import DeckViewContainer from '../container/DeckViewContainer'
import NewCardContainer from '../container/NewCardContainer'
import QuizViewContainer from '../container/QuizViewContainer'
import QuizResultContainer from '../container/QuizResultContainer'

const BottomNavigator = createBottomTabNavigator(
  {
    [routes.Decks]: {
      screen: DecksListContainer,
      navigationOptions: {
        tabBarLabel: 'DECKS',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="cards" size={30} color={tintColor} />
        ),
      },
    },
    [routes.NewDeck]: {
      screen: NewDeckContainer,
      navigationOptions: {
        tabBarLabel: 'NEW DECK',
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="add-box" size={30} color={tintColor} />
        ),
      },
    },
    [routes.Stats]: {
      screen: StatsViewContainer,
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

const stackNavitationOptions = {
  headerTintColor: theme.text,
  headerStyle: {
    backgroundColor: theme.headerBackground,
  },
  headerTitleStyle: {
    fontSize: 25,
  },
}

const StackNavigator = createStackNavigator({
  [routes.Home]: {
    screen: BottomNavigator,
  },
  [routes.DeckView]: {
    screen: DeckViewContainer,
    navigationOptions: {
      title: 'Deck',
      ...stackNavitationOptions,
    },
  },
  [routes.NewCardView]: {
    screen: NewCardContainer,
    navigationOptions: {
      title: 'New Card',
      ...stackNavitationOptions,
    },
  },
  [routes.QuizView]: {
    screen: QuizViewContainer,
    navigationOptions: {
      title: 'Quiz',
      ...stackNavitationOptions,
    },
  },
  [routes.QuizResultView]: {
    screen: QuizResultContainer,
    navigationOptions: {
      title: 'Quiz result',
      ...stackNavitationOptions,
    },
  },
})

export default createAppContainer(StackNavigator)
