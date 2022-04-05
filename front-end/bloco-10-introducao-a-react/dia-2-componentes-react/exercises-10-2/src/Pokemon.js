import React from "react";
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
  render() {

    const { name, type, image, id, averageWeight : {value, measurementUnit} } = this.props.poke;

    return <div className="pokemons">
      <img src={image}></img> 
      <div>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Average weight: {value}{measurementUnit}</p>
      </div>
      <p className="p-index">Index: {id}</p>
    </div>
  }
}

Pokemon.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string,
  id: PropTypes.number,
}

export default Pokemon

// averageWeight: { value, measurementUnit}