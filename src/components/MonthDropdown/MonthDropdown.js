import React, { Component } from "react";
// import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const months = [
  { key: 'January', text: 'January', value: '01' },
  { key: 'February', text: 'February', value: '02' },
  { key: 'March', text: 'March', value: '03' },
  { key: 'April', text: 'April', value: '04' },
  { key: 'May', text: 'May', value: '05' },
  { key: 'June', text: 'June', value: '06' },
  { key: 'July', text: 'July', value: '07' },
  { key: 'August', text: 'August', value: '08' },
  { key: 'September', text: 'September', value: '09' },
  { key: 'October', text: 'October', value: '10' },
  { key: 'November', text: 'November', value: '11' },
  { key: 'December', text: 'December', value: '12' },
 
]

class MonthDropdown extends React.Component {

  
  findMonth(data) {
    const monthNum = data.value - 1;
    const monthKey = data.options[monthNum].key
    console.log(monthKey);
  
  }
  
  render() {
    return (
      <Dropdown 
        placeholder='Month' 
        fluid selection options={months}
        // value={this.props.month} 
        // onChange={this.props.handleMonthsChange}
        onChange = { (event, data) => {
          this.findMonth(data);
        }}
      />
    )
  }
  
}
  export default MonthDropdown
  