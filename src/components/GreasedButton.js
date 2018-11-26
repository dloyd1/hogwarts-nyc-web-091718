import React from 'react'


class GreaseButton extends React.Component{

  render(){

    return(
        <div>
          <label>Greased:</label>
          <input onClick={this.props.handleGrease} type="radio" name="Greased" checked={this.props.checked} />
        </div>

      )
  }
}

export default GreaseButton
