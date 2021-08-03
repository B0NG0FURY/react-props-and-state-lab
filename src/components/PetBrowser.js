import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  showPets = () => {
    this.props.pets.forEach(pet => <Pet pet={pet} />)
  }
  render() {
    return <div className="ui cards">{this.showPets()}</div>
  }
}

export default PetBrowser
