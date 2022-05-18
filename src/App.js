import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props); // tenho que mudar o estado em relação ao que está sendo escrito nos inputs
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cartaNova: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    // disable = {isSaveButtonDisabled}
    // this.onSaveButtonClick = this.onSaveButtonClick.bind(this); // Onclick = {onSaveButtonClick}
  }

  onInputChange = (event) => {
    if (event.target.type === 'checkbox') {
      this.setState({ [event.target.name]: event.target.checked });
    }
    this.setState({
      [event.target.name]: event.target.value }, () => this.verificarInputs());
  }

  //* o botao tem que comecar desabilitado e, a medida que vai passando os ifs que ele habilita

  verificarInputs = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = this.state;
    const atributo1 = parseInt(cardAttr1, 10); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    const atributo2 = parseInt(cardAttr2, 10);
    const atributo3 = parseInt(cardAttr3, 10);
    const somaMax = 210;
    const pontosMax = 90;

    if ((cardName !== '' && cardDescription !== '' && cardImage !== '' && cardRare !== '')
    && (atributo1 + atributo2 + atributo3) <= somaMax
    && (atributo1 >= 0 && atributo1 <= pontosMax)
    && atributo2 >= 0 && atributo2 <= pontosMax
    && atributo3 >= 0 && atributo3 <= pontosMax) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  onSaveButtonClick = () => {
    const { cartaNova, cardTrunfo } = this.state;
    cartaNova.push(this.state);
    console.log(cartaNova);
    if (cardTrunfo === 'on') {
      this.setState({ cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: true,
        isSaveButtonDisabled: true });
    } else {
      this.setState({ cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: false,
        isSaveButtonDisabled: true });
    }
  }

  render() { // criar sempre state no pai
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, // o componente __ deve receber as seguintes props:
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
