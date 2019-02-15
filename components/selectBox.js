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

      return (
              <select 
              value={this.state.selectValue} 
              onChange={this.handleChange} 
              disabled={this.props.checked == false}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                {this.props.children === true ? <option value="2">2</option> : null}
              </select>
      );
    }
  }