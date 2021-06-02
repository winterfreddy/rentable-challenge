import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './Search/Search.js'
// import us_cities from './us_cities.json';
// import { resolve } from 'path';

class App extends React.Component {
  
  componentDidMount() {
    // let https = require('https');

    // fetch('https://abodo-misc.s3.amazonaws.com/us_cities.json', {mode: 'cors'})
    //   .then(res => res.json())
    //   .then(data => console.log(data));

    // https.get('https://abodo-misc.s3.amazonaws.com/us_cities.json', (response) => {
    //   response.setEncoding('utf8');
    //   let body = "";
    //   response.on("data", data => {
    //     body += data;
    //   })
    //   response.on("end", () => {
    //     console.log(resolve(JSON.parse(body)));
    //   })
    // })
  }

  render() {
    return(
      <div>
        <Search />
      </div>
    )
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // )
  }
}

export default App;
