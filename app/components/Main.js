//  * **Main** - contains the main-container div that holds the main layout and navigation. This component should also be able to hold sub-components Search and Saved

// Include React
import { Component } from 'react'
import { Search } from './children/search'
import { Saved } from './children/saved'


export class Main extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    this.setState({
      articles:
    });
  componentWillUnmount() {

  }
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

        })