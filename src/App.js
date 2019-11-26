import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props); {

    };
  }

  render() {
    return (
      <div>
      <h1>WELCOME TO THE DnD CHARACTER CREATOR</h1>
      <h3>Use this tool to enter a number and get your desired traits + modifier</h3>      
      <div className = "container">
      <BoxDuo name = "Strength"/>
      <BoxDuo name = "Dexterity"/>
      <BoxDuo name = "Constitution"/>
      <BoxDuo name = "Intelligence"/>
      <BoxDuo name = "Wisdom"/>
      <BoxDuo name = "Charisima"/>
      </div>
      </div>
    );
  }
}

class BoxDuo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modifier: 0,
      name: this.props.name
    };
  }
  calculateModifier(stat){
    return Math.floor((stat-10)/2)

  }
  changeText = (event) =>{
    this.setState({
      modifier: this.calculateModifier(event.target.value)
    })
  }

  dieRoll(event) {
    return(
      Math.floor(Math.random()*15)+3
    );
  }
render(){
  return(
    <div className="boxlayout">
      <h3 className = "title">{this.state.name}</h3>
      <textarea className="statfield" onChange={this.changeText}>

      </textarea>
      <div className="modfield">
        {this.state.modifier}
      </div>
    </div>
  )
}

}


export default App;

