//  * **Main** - contains the main-container div that holds the main layout and navigation. This component should also be able to hold sub-components Search and Saved

// Include React
import { React } from 'react'
import { search } from './children/search'
import { saved } from './children/saved'

export const Main= React.createClass( {
  dateFormatted(datestr) {
    arr= datestr.split();
    year = arr[0]+ arr[1] + arr[2]+ arr[3];
    month = arr[4]+ arr[5];
    day = arr[6]+arr[7];
    return year + "-" + month + "-" + day
  },
  // Here we render the function
  render() {
    return (
      <div className="app">
        {(this.props.location.pathname === "/") ?
        : 
          <div>
            <div>
              <header>
                {/*header goes here*/}
              </header>
            </div>
            <div>
              {/*search here*/}
            </div>
            <div>
              {/*saved here*/}
              {/*needs dateFormatted from db*/}
            </div>
          </div>    
      </div>

        }))