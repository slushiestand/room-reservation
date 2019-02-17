import { connect } from 'react-redux'
import React, { Component } from 'react'
import styled from 'styled-components'
import Room1 from './room1'
import Room from './room'
import { check2, check3, check4, uncheck, uncheck4, adults, children } from '../actions'

const PageContainer = styled.form`
  display: flex;
  flex-direction: column;
`

const RoomContainer = styled.div`
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


  handleSubmit = (selectValue) => {

  }
render() {
  const theState = this.props.theState
  return (
    <div>
    <PageContainer>
      <RoomContainer>
        <Room1 room={1}/>
        <Room 
          room={2} 
          handleClick={this.handleClickBox2} 
          checked={theState.check2}

        />
        <Room 
          room={3} 
          handleClick={this.handleClickBox3} 
          checked={theState.check3}
  
        />
        <Room 
          room={4} 
          handleClick={this.props.checkBox4} 
          checked={theState.check4}

        />
      </RoomContainer>  
      <Submit onClick={this.handleSubmit}> Submit </Submit>
    </PageContainer>
    
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
  checkBox4: () => {dispatch(check4())},

})

//set initial state of app by pull from reducer like suggested here: https://stackoverflow.com/questions/52479422/keep-redux-form-values-after-page-reload-without-submit-form
export default connect(
  mapStateToProps, mapDispatchToProps
)(Home)
