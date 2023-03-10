import React from 'react';
import PropTypes from 'prop-types';
// import './style.css';

class Form extends React.Component {
//* exibir o super trunfo somente com o valor da prop cardTrunfo for true
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, // o componente __ deve receber
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, // as seguintes props:
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <form className="form">
        <div className="name-description">
          <label htmlFor="name-input">
            Nome:
            <input
              value={ cardName }
              onChange={ onInputChange }
              type="text"
              data-testid="name-input"
              name="cardName"
            />
          </label>
          <label htmlFor="description-input" className="text-area">
            Descrição:
            <textarea
              value={ cardDescription }
              onChange={ onInputChange }
              type="text"
              rows="5"
              cols="25"
              data-testid="description-input"
              name="cardDescription"
            />
          </label>
        </div>
        <div className="atributos">
          <label htmlFor="attr1-input">
            Atributo 1:
            <input
              value={ cardAttr1 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr1-input"
              name="cardAttr1"
            />
          </label>
          <label htmlFor="attr2-input">
            Atributo 2:
            <input
              value={ cardAttr2 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr2-input"
              name="cardAttr2"
            />
          </label>
          <label htmlFor="attr3-input">
            Atributo 3:
            <input
              value={ cardAttr3 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr3-input"
              name="cardAttr3"
            />
          </label>
        </div>
        <label htmlFor="image-input">
          Imagem:
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
            name="cardImage"
          />
        </label>
        <div className="raridade-superT">
          <label htmlFor="rare-input">
            Raridade
            <select
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
              name="cardRare"
            >
              <option value="normal" name="normal">normal</option>
              <option value="raro" name="raro">raro</option>
              <option value="muito raro" name="muito raro">muito raro</option>
            </select>
          </label>
          { hasTrunfo === false ? (
            <label htmlFor="trunfo-input">
              Super Trybe Trunfo
              <input
                checked={ cardTrunfo }
                onChange={ onInputChange }
                type="checkbox"
                data-testid="trunfo-input"
                name="cardTrunfo"
              />
            </label>
          ) : <h3>Você já tem um Super Trunfo em seu baralho</h3>}
        </div>
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="button"
          data-testid="save-button"
          name="button"
        >
          Salvar

        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
