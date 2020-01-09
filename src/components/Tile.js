import React, { Component } from 'react'


export default class Tile extends Component {
constructor() {
    super()

    this.state = {
         clicked : false 
    }
}

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        },() => console.log(this.state.clicked) )
    }


    render() {
        let clickedStatus = this.state.clicked;
       
        const {name, specialty, greased, weight, medal} = this.props.hog
        // console.log(this.props.hog)

        return (
            
            <div onClick={this.handleClick} className='pigTile'>
            {clickedStatus? (
                <div>
                <h2>{name}</h2>
                <ul>
                    <li>Weight: {weight}</li>
            <li>Specialty: {specialty}</li>
            <li>Greased: {greased? 'Yas!' : 'No. Plz grease me.'}</li>
            <li>Highest Achieved: {medal}</li>
                </ul>
                </div>
            ) : ( 
            <h2>{name}</h2>
                )
            }    
        
            </div>
        )
    }
}
