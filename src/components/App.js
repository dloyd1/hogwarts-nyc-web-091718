import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from './PigContainer';
import NameButton from './NameButton'
import WeightButton from './WeightButton'
import GreasedButton from './GreasedButton'


class App extends Component {

  state = { allPigs: [...hogs], selectedPigs: [...hogs], onlyGreased:false, weightChecked:false, nameChecked:false }

//------------------------------------------
  handleNameSort = ()=>{
    this.setState(()=>{
      return {selectedPigs: this.state.selectedPigs.sort((pigA,pigB)=>pigA.name.localeCompare(pigB.name))}
      })
  }

//-------------------------------------------

  handleWeightSort = ()=>{
    this.setState(()=>{
      return {selectedPigs: this.state.selectedPigs.sort((pigA,pigB)=>pigA['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - pigB['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])}
      })
  }

//-------------------------------------------

  handleGreasedSort = ()=>{
    if (this.state.onlyGreased === false) {
      this.setState(()=>{
        return {selectedPigs: this.state.selectedPigs.filter( (pig) => {
          return pig.greased
          }),
          onlyGreased: true
        }
      })
    } //end of if stmt
    else {
      if(this.state.weightChecked) {
        this.handleWeightSort()
      }
      else if(this.state.nameChecked) {
        this.handleNameSort()
      }
      else {
      this.setState(() => {
      return {selectedPigs: this.state.allPigs,
              onlyGreased: false}
        })
      }
    }
  }


//-------------------------------------------
  render() {

    return (
      <div className="App">

          < Nav />
          <div>
            <NameButton handleName={this.handleNameSort}/>
            <WeightButton handleWeight={this.handleWeightSort}/>
            <GreasedButton handleGrease={this.handleGreasedSort}
            checked={this.state.onlyGreased}
            />
          </div>
          <br></br>
          <PigContainer
          selectedPigs = {this.state.selectedPigs}
          />

      </div>
    )
  }

//-------------------------------------------

}

export default App;
