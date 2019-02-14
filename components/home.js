import { connect } from 'react-redux'
import React, { Component } from 'react'
import styled from 'styled-components'
import Room1 from './room1'
import Room from './room'
import { check2, check3, check4, uncheck, uncheck4 } from '../actions'

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
`

class Home extends Component {
  handleClickBox2 = () => {
    if(this.props.theState.check.check3 == true || this.props.theState.check.check4 == true) {
      this.props.uncheckBoxes()
    }
    else this.props.checkBox2()
  }

  handleClickBox3 = () => {
    if(this.props.theState.check.check4 == true ) {
      this.props.uncheckBox4()
    }
    else this.props.checkBox3()
  }

render() {
  console.log(this.props.theState.check.check3);
  const theState = this.props.theState
 


  return (
    <PageContainer>
      <Room1 />
      <Room room={'Room 2'} name={'box2'} handleClick={this.handleClickBox2} checked={theState.check.check2}/>
      <Room room={'Room 3'} name={'box3'} handleClick={this.handleClickBox3} checked={theState.check.check3}/>
      <Room room={'Room 4'} name={'box4'} handleClick={this.props.checkBox4} checked={theState.check.check4}/>
    </PageContainer>
  )
}
}

const mapStateToProps = (state) => ({
  theState : state
})

const mapDispatchToProps = (dispatch) => ({
  uncheckBoxes: () => {dispatch(uncheck())},
  uncheckBox4: () => {dispatch(uncheck4())},
  checkBox2: () => {dispatch(check2("box2"))},
  checkBox3: () => {dispatch(check3("box3"))},
  checkBox4: () => {dispatch(check4("box4"))}
})


export default connect(
  mapStateToProps, mapDispatchToProps
)(Home)
