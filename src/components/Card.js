import React from 'react';
import PropTypes from 'prop-types';
// import './style.css';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <section className="preview-card">
        <h2>Preview</h2>
        <h2 data-testid="name-card">
          Nome:
          {cardName}
        </h2>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <h2 data-testid="description-card">
          Descrição:
          {cardDescription}
        </h2>
        <p data-testid="attr1-card">
          Atributo 1:
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          Atributo 2:
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          Atributo 3:
          {cardAttr3}
        </p>
        <p data-testid="rare-card">
          Raridade:
          {cardRare}
        </p>
        { cardTrunfo === true && <h4 data-testid="trunfo-card"> Super Trunfo </h4> }
      </section>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Card;
