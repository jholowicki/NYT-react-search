//  * **Main** - contains the main-container div that holds the main layout and navigation. This component should also be able to hold sub-components Search and Saved

// Include React
import { Component } from 'react'
import { search } from './children/search'
import { saved } from './children/saved'

export class Main extends Component {

  // Here we render the function
  render() {
    return (  
      <div className="app">
        {(this.props.location.pathname === "/") ?
        : 
      <div>
        {/*layout goes here*/}
        </div>    
      </div>

    )
  }

// Export the componen back for use in other files
module.exports = Main;