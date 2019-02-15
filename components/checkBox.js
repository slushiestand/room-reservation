import React from 'react';
import styled from 'styled-components';


const Input = styled.input`
  {
    width: 15px;
    height: 15px;


  }
`;



const CheckBox = (props) => (

        <Input id="input" type="checkbox" checked={props.checked} onChange={props.handleChange} />

    
);

export default CheckBox