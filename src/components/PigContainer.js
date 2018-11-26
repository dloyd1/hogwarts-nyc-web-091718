import React from 'react'
import Pig from './Pig'

class PigContainer extends  React.Component {


render() {
  return (
    <div className="ui grid container"> {this.props.selectedPigs.map( pig=> {

      return <Pig
              name={pig.name}
              weight={pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
              medal={pig['highest medal achieved']}
              greased={pig.greased}
              />
        }
      )}
    </div>
    )
  }


} //end of PigContainer class






export default PigContainer;
