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
const Submit = styled.button`
  background-color: #C0C0C0;
  height: 30px;
  width: 60px;
  margin-left: 25px;
  margin-top: 25px;
`

class Home extends Component {
  handleClickBox2 = () => {
    //check if Room 3 or Room 4 is checked, if they are, a click on Room 2 should uncheck Rooms 3 and 4, if not
    //a click should check Room 2
    if(this.props.theState.check3 === true || this.props.theState.check4 === true) {
      this.props.uncheckBoxes()
    }
    else this.props.checkBox2()
  }

  handleClickBox3 = () => {
    //check if Room 4 is checked, if yes, a click on Room 3 should uncheck Room 4, if not
    //a click should check Room 3
    if(this.props.theState.check4 == true ) {
      this.props.uncheckBox4()
    }
    else this.props.checkBox3()
  }
  handleSubmit = () => {
    window.location.reload()
  }
render() {
  const theState = this.props.theState
  return (
    <div>
    <PageContainer>
      <Room1 room={'Room 1'}/>
      <Room room={'Room 2'} handleClick={this.handleClickBox2} checked={theState.check2}/>
      <Room room={'Room 3'} handleClick={this.handleClickBox3} checked={theState.check3}/>
      <Room room={'Room 4'} handleClick={this.props.checkBox4} checked={theState.check4}/>

    </PageContainer>
    <Submit onClick={this.handleSubmit}> Submit </Submit>
    </div>


  )
}
}

const mapStateToProps = (state) => ({
  theState : state.check
})

const mapDispatchToProps = (dispatch) => ({
  uncheckBoxes: () => {dispatch(uncheck())},
  uncheckBox4: () => {dispatch(uncheck4())},
  checkBox2: () => {dispatch(check2())},
  checkBox3: () => {dispatch(check3())},
  checkBox4: () => {dispatch(check4())}
})


export default connect(
  mapStateToProps, mapDispatchToProps
)(Home)
