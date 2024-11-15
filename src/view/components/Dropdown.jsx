import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    let optionsList = Object.entries(this.props.dropdownOptions);
    this.options = new Array(optionsList.length);

    optionsList.forEach((op, i) => {
      this.options[i] = (
        <option name={i} key={i} value={op[0]}>
          {op[1]}
        </option>
      );
    });
  }

  render() {
    return <select name='Dropdown' onChange={this.props.eventHandler}>{this.options}</select>;
  }
}

export default Dropdown;
