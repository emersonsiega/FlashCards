import React from 'react'
import styled from 'styled-components'

import Title from './Title'

const StatsViewContainer = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: ${props => props.theme.background};
`

const StatsTitle = styled(Title)`
  text-align: center;
`

const StatsItem = styled.View`
  margin-top: 20px;
  margin-bottom: auto;
  border-bottom-width: 0.25px;
  border-bottom-color: ${props => props.theme.inactiveBorder};
  flex-direction: row;
  justify-content: space-between;
`

const ItemTitle = styled(Title)`
  font-size: 25px;
`

const ItemResult = styled(Title)`
  font-size: 30px;
  font-weight: bold;
`

const EmptyStats = styled.View`
  flex: 1;
  justify-content: center;
  margin-top: 100px;
`

const StatsView = ({ stats }) => (
  <StatsViewContainer>
    <StatsTitle>Last results</StatsTitle>
    {stats.length === 0 && (
      <EmptyStats>
        <StatsTitle>No stats found 🌵</StatsTitle>
      </EmptyStats>
    )}
    {stats.map(item => (
      <StatsItem key={item.name}>
        <ItemTitle>{item.name}</ItemTitle>
        <ItemResult>{item.lastResult} %</ItemResult>
      </StatsItem>
    ))}
  </StatsViewContainer>
)

export default StatsView
