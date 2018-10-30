import React, { Component } from 'react';
import HeroesCard from "./components/HeroesCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import heroes from "./heroes.json";
import './App.css';

class App extends Component {

  state = {
   
   heroes

  };

  removeHero = id => {

  const heroes = this.state.heroes.filter(heroes => heroes.id !==id);
  this.setState({ heroes });

  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.heroes.map(heroe => (

        <HeroesCard
        removeHero={this.removeHero}
        id={heroes.id}
        name={heroes.name}
        image={heroes.image}
        />
        ))}
    
    </Wrapper>
    );
  }
}

export default App;
