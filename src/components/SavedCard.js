import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class SavedCard extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, deleteCard } = this.props; //! se eu tirar daqui ele quebra
    return (
      <section className="preview-card">
        <h2 data-testid="name-card">
          {cardName}
        </h2>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <h2 data-testid="description-card">
          {cardDescription}
        </h2>
        <p data-testid="attr1-card">
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          {cardAttr3}
        </p>
        <p data-testid="rare-card">
          {cardRare}
        </p>
        { cardTrunfo === true && <h4 data-testid="trunfo-card"> Super Trunfo </h4> }
        <button
          data-testid="delete-button"
          type="submit"
          onClick={ () => deleteCard(cardName) }
        >
          Excluir

        </button>
      </section>
    );
  }
}
SavedCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteCard: PropTypes.func.isRequired,
};
export default SavedCard;
