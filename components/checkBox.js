import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  &:checked {
 
  }
`;

const CheckBox = (props) => (
  <div>
    <Input id="input" type="checkbox" checked={props.checked} onChange={props.handleChange}/>
  </div>
);

export default CheckBox