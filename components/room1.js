import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import SelectBox from './selectBox'
import { adults, children } from '../actions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  background-color: #E7E7E7;
  font-family: Arial;
  padding: 5px;
  border-radius: 10px;
  height: 100px;
  `;

  const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
    margin-top: 5px;
    line-height: 21px;
`;

  const Title = styled.div`
  color: #292929;
  text-align: left;
  margin-left: 5px;
  font-weight: bold;
  font-size: 15px;

  `;

  const RoomsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 2px;


`;
  
  const AdultsSection = styled.div`
  background-color: #FFFFFF;
  flex-direction: column;
  text-align: center;
  font-size: 12px;
  padding: 10px 5px 10px 10px;


  `;

  const ChildrenSection = styled.div`
  background-color: #FFFFFF;
  flex-direction: column;
  text-align: center;
  font-size: 12px;
  padding: 10px 10px 10px 5px;
`;

  const UnorderedList = styled.ul`
    margin: 0;
    padding: 0;
  `;

  const ListItem = styled.li`
    list-style-type: none;
  `;

  class Room1 extends Component {
    handleChangeAdult = (selectValue) => {
      const room = this.props.room
      console.warn(selectValue, room)
      this.props.adultsInRoom(selectValue, room)
    }

    handleChangeChildren = (selectValue) => {
      const room = this.props.room
      console.warn(selectValue, room)
      this.props.childrenInRoom(selectValue, room)
    }
    render() {
      return (
          <Container >
            <TitleContainer>
              <Title> Room {this.props.room} </Title>
            </TitleContainer>
            <RoomsContainer>
              <AdultsSection>
                <UnorderedList>
                  <ListItem>
                  Adults
                  </ListItem>
                  <ListItem>
                  (18+)
                  </ListItem>
                </UnorderedList>
                <SelectBox onChange={this.handleChangeAdult}/>
              </AdultsSection>
              
              <ChildrenSection>
              <UnorderedList>
                  <ListItem>
                    Children
                  </ListItem>
                  <ListItem>
                    (0-17)
                  </ListItem>
                </UnorderedList>
                <SelectBox onChange={this.handleChangeChildren} children={true}/>
              </ChildrenSection>
            </RoomsContainer>
  
          </Container> 
         
      );
    }
  }

    
  const mapDispatchToProps = (dispatch) => ({
    adultsInRoom: (selectValue, room) => {dispatch(adults(selectValue, room))},
    childrenInRoom: (selectValue, room) => {dispatch(children(selectValue, room))},

  })
  
  //set initial state of app by pull from reducer like suggested here: https://stackoverflow.com/questions/52479422/keep-redux-form-values-after-page-reload-without-submit-form
  export default connect(
    null, mapDispatchToProps
  )(Room1)