import React, { Component } from 'react'
import loading from './loading.gif'
import car from './car.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-20">
        <img src={car} alt="loading" width="200px"/>
      </div>
    )
  }
}

export default Spinner
