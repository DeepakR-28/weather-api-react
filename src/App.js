import React, { Component } from 'react';
import axios from 'axios'

import Main from './Components/Main/Main'

class App extends Component {
  
  state = {
    city : "Delhi",
    min : 0,
    max : 0,
    error : "Somehting"
  }
  inputHandler = (event) =>{
    console.log(event.target.value)  
    this.setState({
      city : event.target.value
      })
  }
  updateCityName = () =>{
    let city = this.state.city
    // axios.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=c5888ccbcf7a23e7faceecea8ee3b795')
    //   .then(response =>{
    //     console.log(response)
    //     this.setState({
    //       min : response.data.main.temp_min,
    //       max : response.data.main.temp_max,
    //       error:null
    //     })

    //   })
    //   .catch(err =>{
    //     console.log(err)
    //     this.setState({
    //       error : "We don't have this location's data"
    //     })
    //   })
  }
  render() {
    return (
      <div className="App">
        <Main 
          input = {(input) => this.inputHandler(input)} 
          searchHandler = {this.updateCityName} 
          maxTemp = {this.state.max} 
          minTemp = {this.state.min}
          error = {this.state.error}
          />
      </div>
    );
  }
}

export default App;
