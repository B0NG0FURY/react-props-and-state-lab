import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = (selectValue) => {
    this.setState({
      filters: {
        type: selectValue
      }
    })
  }

  findPets = () => {
    let fetchPets;
    if (this.state.filters.type === 'all') {
      fetchPets = fetch('/api/pets')
    } else {
      fetchPets = fetch(`/api/pets?type=${this.state.filters.type}`)
    }
    fetchPets.then(resp => resp.json()).then(pets => this.setState({
      pets: [pets]
    }))
  }

  adoptPet = (id) => {
    let petsArray = [...this.state.pets];
    let pet = petsArray.findIndex(pet => pet.id === id);
    petsArray[pet].isAdopted = true;
    this.setState({
      pets: petsArray
    });
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
