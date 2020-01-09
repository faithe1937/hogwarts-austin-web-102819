import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogIndex from './HogIndex'
import Filters from './Filters'

class App extends Component {
  constructor() {
    super()
  
    this.state = {
      hogs: hogs,
      filters: {
        greased: "",
        sortedAZ: ''
      }
       
    }
  }

  handleChange = (event) => {
    let response ; 
    if (event.target.value === 'true'){
      response = 'true'
    } else if (event.target.value === 'false'){
      response = 'false'
    } else {
      response = ''
    }
 
    this.setState({
      filters: {
        ...this.state.filters,
        greased: response
      }
    }, () => console.log(this.state))
  }

  handleSortAZ = () => {
    this.setState({
      filters: {
        ...this.state.filters,
        sortedAZ: !this.state.filters.sortedAZ
      }
    })
  }
  
  render() {
    // console.log(this.state.hogs)
    return (
      <div className="App">
          < Nav/>
          < Filters
           handleChange={this.handleChange}
           handleSortAZ={this.handleSortAZ}
           />
          <HogIndex filters = {this.state.filters} hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
