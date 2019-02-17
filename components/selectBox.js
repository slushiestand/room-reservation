import React, { Component } from 'react'

export default class SelectBox extends Component {

    handleChange = (e) => {
        const selectValue = e.target.value
        if (this.props.children === true) {
            return this.props.onChangeChildren(selectValue)
        } else return this.props.onChangeAdults(selectValue)
    }

    
    render() {
      return (
              <select 
              onChange={this.handleChange} 
              disabled={this.props.checked == false}
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                {this.props.children === true ? <option value={2}>2</option> : null}
              </select>
      );
    }
  }