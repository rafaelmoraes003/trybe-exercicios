import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      shouldBeDisabled: true,
    }
  }

  enableBtn = () => {
    this.setState({
      shouldBeDisabled: false,
    })
  }

  removeItem = ({ target }) => {
    target.parentElement.parentElement.remove();
  }

  render() {
    const { content } = this.props;
    const { shouldBeDisabled } = this.state;
    return (
      <div className="Item">
        { content }
        <button onClick={this.enableBtn}>Selecionar</button>
        <button
          disabled={shouldBeDisabled}
          onClick={this.removeItem}
        >
          Remover
        </button>
    </div>
    )
  }
}


export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
};