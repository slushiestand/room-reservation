import React, { Component } from 'react'

export default class SelectBox extends Component {
    state = {
        selectValue: 0
    }

    handleChange = (e) => {
        this.setState({
            selectValue: e.target.value
        })
    }
    render() {
        //console.warn(this.state.selectValue)
      return (
              <select 
              value={this.state.selectValue} 
              onChange={this.handleChange} 
              disabled={this.props.checked == false}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
      );
    }
  }