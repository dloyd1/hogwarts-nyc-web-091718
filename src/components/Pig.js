import React from 'react'


class Pig extends React.Component {
  state={
    selected:false
  }
handleOnClick=()=>{
  return(
      this.setState(()=>{
        if(this.state.selected){
          return {selected:false}
        }else{
          return {selected:true}
        }
      })
  )
}
render() {
      return(
          <div className="ui eight wide column">
            <h1> {this.props.name} </h1>
            <img classNames="image"
            onClick={this.handleOnClick}
             src={require(`../hog-imgs/${this.props.name.toLocaleLowerCase().replace(/ /g,"_")}.jpg`)}/>
            <div className="description">
            {this.state.selected ? <ul><li>Weight: {this.props.weight}</li><li>Highest Medal: {this.props.medal}</li><li>Greased: {`${this.props.greased}`}</li></ul>:null}
            </div>
          </div>
          )
        }
} //end of Pig"" class






export default Pig;
