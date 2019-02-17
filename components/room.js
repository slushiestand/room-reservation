import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import SelectBox from './selectBox'
import CheckBox from './checkBox'
import { adults, children } from '../actions'



const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    background-color: ${props => props.checked == true ? '#E7E7E7' : '#DBDBE3'};
    color: ${props => props.checked == true ? '#292929' : '#44454A'};
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
  `;
  
  const Title = styled.div`
    text-align: left;
    font-weight: bold;
    font-size: 15px;

  `;

  const RoomsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.checked == true ? '#FFFFFF' : '#DBDBE3'};
    color: ${props => props.checked == true ? '#292929' : '#44454A'};
    border-radius: 10px;
    padding: 2px;


`;
  
  const AdultsSection = styled.div`
    background-color: ${props => props.checked == true ? '#FFFFFF' : '#DBDBE3'};
    flex-direction: column;
    text-align: center;
    font-size: 12px;
    padding: 10px 5px 10px 10px;


  `;

  const ChildrenSection = styled.div`
    background-color: ${props => props.checked == true ? '#FFFFFF' : '#DBDBE3'};
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

  class Room extends Component {

    handleChangeAdults = (selectValue) => {
      const room = this.props.room
      this.props.adultsInRoom(selectValue, room)
    }

    handleChangeChildren = (selectValue) => {
      const room = this.props.room
      this.props.childrenInRoom(selectValue, room)
    }

    render() {
      return (
          <Container checked={this.props.checked}>
            <TitleContainer >
            <CheckBox  
              checked={this.props.checked} 
              handleChange={this.props.handleClick}
            />
            <Title>  Room {this.props.room} </Title>
            </TitleContainer>
            <RoomsContainer checked={this.props.checked}>
              <AdultsSection checked={this.props.checked}>
                <UnorderedList>
                  <ListItem>
                  Adults
                  </ListItem>
                  <ListItem>
                  (18+)
                  </ListItem>
                </UnorderedList>
                <SelectBox checked={this.props.checked} onChangeAdults={this.handleChangeAdults} children={false}/>
              </AdultsSection>
              
              <ChildrenSection checked={this.props.checked}>
              <UnorderedList>
                  <ListItem>
                    Children
                  </ListItem>
                  <ListItem>
                    (0-17)
                  </ListItem>
                </UnorderedList>
                <SelectBox checked={this.props.checked} onChangeChildren={this.handleChangeChildren} children={true}/>
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
  
  export default connect(
    null, mapDispatchToProps
  )(Room)