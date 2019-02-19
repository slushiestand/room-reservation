import React, {Component} from 'react'
import { connect } from 'react-redux'
import Home from '../components/home'

class Index extends Component {


  render () {
    return <Home />
  }
}

export default connect()(Index)
