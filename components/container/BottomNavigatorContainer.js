import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleFetchAll } from '../../store/actions/shared'
import withLoading from '../hoc/withLoading'
import BottomNavigator from '../presentational/BottomNavigator'

const BottomNavigatorWithLoading = withLoading(BottomNavigator)

class BottomNavigatorContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }

  async componentDidMount() {
    const { fetchAll } = this.props
    await fetchAll()
    this.setState(() => ({ isLoading: false }))
  }

  render = () => <BottomNavigatorWithLoading isLoading={this.state.isLoading} />
}

const mapStateToProps = props => props

const mapDispatchToProps = dispatch => ({
  fetchAll: () => dispatch(handleFetchAll()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomNavigatorContainer)
