import React, { Component } from "react";
// import React from 'react'
import { Dropdown } from 'semantic-ui-react'
  



const months = [
  { key: '1', text: '1', value: '01' },
  { key: '2', text: '2', value: '02' },
  { key: '3', text: '3', value: '03' },
  { key: '4', text: '4', value: '04' },
  { key: '5', text: '5', value: '05' },
  { key: '6', text: '6', value: '06' },
  { key: '7', text: '7', value: '07' },
  { key: '8', text: '8', value: '08' },
  { key: '9', text: '9', value: '09' },
  { key: '10', text: '10', value: '10' },
  { key: '11', text: '11', value: '11' },
  { key: '12', text: '12', value: '12' },
  { key: '13', text: '13', value: '13' },
  { key: '14', text: '14', value: '14' },
  { key: '15', text: '15', value: '15' },
  { key: '16', text: '16', value: '16' },
  { key: '17', text: '17', value: '17' },
  { key: '18', text: '18', value: '18' },
  { key: '19', text: '19', value: '19' },
  { key: '20', text: '20', value: '20' },
  { key: '21', text: '21', value: '21' },
  { key: '22', text: '22', value: '22' },
  { key: '23', text: '23', value: '23' },
  { key: '24', text: '24', value: '24' },
  { key: '25', text: '25', value: '25' },
  { key: '26', text: '26', value: '26' },
  { key: '27', text: '27', value: '27' },
  { key: '28', text: '28', value: '28' },
  { key: '29', text: '29', value: '29' },
  { key: '30', text: '30', value: '30' },
  { key: '31', text: '31', value: '01' },
]

class DayDropdown extends React.Component {
  
  
  fetchDate(data) {
    const datePick = data.value;
    console.log(datePick);
    return datePick;

  } 

  componentDidUpdate = () => {
    console.log("DayDropDown componentDidUpdate")
  }
  componentDidCatch = () => {
    console.log("DayDropDown componentDidCatch")
  }
  componentDidMount = () => {
    console.log("DayDropDown componentDidMount")
  }

  render() {
    return(
      <Dropdown 
        placeholder='Date' 
        fluid selection options={months} 
        ref={this.dayInput}
        // value={this.props.day}
        name={this.fetchDate}
        // onChange= {( event, data ) => {
        //   const day = data.value;
        //   this.props.handleDayPick
        //   this.fetchDate(data)
        // }}
        onChange={( this.props.handleDayPick )}
        // onChange={ (e) => this.props.handleDayPick(e)}
      />
    )
  }
}

export default DayDropdown
