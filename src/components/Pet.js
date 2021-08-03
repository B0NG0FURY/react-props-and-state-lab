import React from 'react'

class Pet extends React.Component {

  genderIcon = (pet) => {
    if (pet.gender === 'female') {
      return '♀';
    } else {
      return '♂';
    }
  }

  adoptButton = (pet) => {
    if (pet.isAdopted === true) {
      return <button className="ui disabled button">Already adopted</button>;
    } else {
      return <button className="ui primary button" onClick={() => this.props.onAdoptPet(pet.id)}>Adopt pet</button>;
    }
  }
  render() {
    let pet = this.props.pet;
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.genderIcon(pet)}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptButton(pet)}
        </div>
      </div>
    )
  }
}

export default Pet
