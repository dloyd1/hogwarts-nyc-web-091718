import React from 'react'


class WeightButton extends React.Component{

  render(){

    return(
        <div>
          <label>Weight:</label>
          <input onClick={this.props.handleWeight} type="radio" name="filter" />
        </div>

      )
  }
}

export default WeightButton
