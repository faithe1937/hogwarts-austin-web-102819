import React, { Component } from 'react'
import Tile from './Tile.js'


export default class HogIndex extends Component {
    hogs = this.props.hogs
    sortedHogs = ''
    sortedHogsAZ = ''    
    

    filterHogByGrease = () => {
        let greased = this.props.filters.greased
    
        if (greased === 'true'){
          this.sortedHogs = this.hogs.filter(hog => hog.greased === true)
        } else if (greased === 'false') {
          this.sortedHogs = this.hogs.filter(hog => hog.greased === false)
        } else {
          this.sortedHogs = this.hogs
        }
    }

    sortHogsAZ = () => {
        if (this.props.filters.sortedAZ === true) {
            this.sortedHogs.sort((a, b) => (a.name > b.name) ? 1 : -1)
            console.log(this.sortedHogs)
        }
        
        
    }

    render() {
      
        
            this.filterHogByGrease()
            this.sortHogsAZ()
        
        return (
            <div className='ui grid container'>
                {this.sortedHogs.map(hog => <Tile hog = {hog} key={hog.name}/>)}
            </div>
        )
    }
}

