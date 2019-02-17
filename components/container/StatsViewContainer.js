import React from 'react'
import { connect } from 'react-redux'

import StatsView from '../presentational/StatsView'

const StatsViewContainer = ({ stats = [] }) => <StatsView stats={stats} />

const mapStateToProps = ({ stats = {} }) => {
  const results = Object.values(stats).map(item => ({
    name: item.deck,
    lastResult: item.results ? item.results[0].result : undefined,
  }))

  return {
    stats: results,
  }
}

export default connect(mapStateToProps)(StatsViewContainer)
