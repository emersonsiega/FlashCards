import React from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons'

import DecksList from '../container/DecksList'
import { theme } from './ThemeProvider'

const BottomNavigator = createBottomTabNavigator({
    Decks: {
        screen: DecksList,
        navigationOptions: {
            tabBarLabel: 'DECKS',
            tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
        }
    },
    NewDeck: {
        screen: DecksList,
        navigationOptions: {
            tabBarLabel: 'NEW DECK',
            tabBarIcon: ({ tintColor }) => <MaterialIcons name='add-box' size={30} color={tintColor} />
        }
    },
    Stats: {
        screen: DecksList,
        navigationOptions: {
            tabBarLabel: 'STATS',
            tabBarIcon: ({ tintColor }) => <Ionicons name='md-podium' size={30} color={tintColor}/>
        }
    }
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        style: {
            height: 56,
            backgroundColor: theme.headerBackground,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowOpacity: 1,
            shadowRadius: 6,
        },
        activeTintColor: theme.main,
        inactiveTintColor: theme.inactiveMenu,
    }
})

export default createAppContainer(BottomNavigator)