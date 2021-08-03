import React from 'react'

class Pet extends React.Component {

  genderIcon = (pet) => {
    if (pet.gender === 'female') {
      return '♀';
    } else {
      return '♂';
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
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
