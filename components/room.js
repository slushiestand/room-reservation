import React, { Component } from 'react'
import styled from 'styled-components'
import SelectBox from './selectBox'
import CheckBox from './checkBox'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    background-color: #E7E7E7;
    font-family: Arial;
    padding: 5px;
    border-radius: 10px;
    

  `;
  
  const Title = styled.div`
    color: #292929;
    text-align: left;
    margin-left: 10px;
    font-weight: bold;
    line-height: 25px;

  `;

  const RoomsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;



`;
  
  const AdultsSection = styled.div`
  background-color: #FFFFFF;
  flex-direction: column;
  text-align: center;
  font-size: 1em;
  padding: 0.3em;
  padding-bottom: 2em;

  `;

  const ChildrenSection = styled.div`
  background-color: #FFFFFF;
  flex-direction: column;
  text-align: center;
  font-size: 1em;
  padding: 0.3em;
  padding-bottom: 2em;

`;

  const UnorderedList = styled.ul`
    margin: 0;
    padding: 0;
  `;

  const ListItem = styled.li`
    list-style-type: none;
  `;

  export default class Room extends Component {
    handleChange(e) {
      e.preventDefault()
    }
    render() {
      //console.warn(this.props.name)
      return (
          <Container>
            <CheckBox 
              name={this.props.name} 
              checked={this.props.checked} 
              handleChange={this.props.handleClick}
            />
            <Title>  {this.props.room} </Title>
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
                <SelectBox />
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
                <SelectBox />
              </ChildrenSection>
            </RoomsContainer>
  
          </Container> 
         
      );
    }
  }