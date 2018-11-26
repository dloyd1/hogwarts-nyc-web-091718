import React from 'react'


class NameButton extends React.Component{

  render(){

    return(
        <div>
          <label>Name:</label>
          <input onClick={this.props.handleName} type="radio" name="filter" />
        </div>

      )
  }
}

export default NameButton
