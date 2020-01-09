import React, { Component } from 'react'

export default class Filters extends Component {
    render() {
        return (
            <div>
                <h4>Do you want your hog greased?</h4>
             <div className="field">
         <select onChange={this.props.handleChange} name="type" id="type">
             <option value="">Doesn't matter to me, honey.</option>
            <option value="true">Yasss, plss.</option>
            <option value="false">No ty</option>
           
          </select><br></br>
          <br></br>
          <button onClick={this.props.handleSortAZ}>Sort A-Z/</button>
            </div>
            </div>
        )
    }
}
