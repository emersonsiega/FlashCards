import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleFetchAll } from '../../store/actions/shared'
import BottomNavigator from "../presentational/BottomNavigator"

class BottomNavigatorContainer extends Component {
    componentDidMount() {
        this.props.fetchAll()
    }

    render = () => <BottomNavigator />
}

const mapStateToProps = (props) => props

const mapDispatchToProps = () => dispatch => ({
    fetchAll: () => dispatch(handleFetchAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigatorContainer)