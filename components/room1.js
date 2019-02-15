import React, { Component } from 'react'
import styled from 'styled-components'
import SelectBox from './selectBox'

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

  export default class Room1 extends Component {

    render() {
      return (
          <Container >
            <TitleContainer>
              <Title> {this.props.room} </Title>
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
                <SelectBox children={true}/>
              </ChildrenSection>
            </RoomsContainer>
  
          </Container> 
         
      );
    }
  }