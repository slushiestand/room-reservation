import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  &:checked {
 
  }
`;

const CheckBox = (props) => (
  <div>
    <Input id="input" type="checkbox" onClick={props.handleClick}/>
  </div>
);

export default CheckBox