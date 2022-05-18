import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import SavedCard from './components/SavedCard';

const initAllState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  constructor(props) {
    super(props); // tenho que mudar o estado em relação ao que está sendo escrito nos inputs
    this.state = {
      ...initAllState,
      hasTrunfo: false,
      cartaNova: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = (event) => {
    if (event.target.type === 'checkbox') {
      this.setState({ [event.target.name]: event.target.checked }); //* mudar o estado do hasTrunfo
    } else {
      this.setState({
        [event.target.name]: event.target.value }, () => this.verificarInputs());
    }
  }

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
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo } = this.state;

    const cartaAtual = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo };
    if (cartaAtual.cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }
    this.setState((prevState) => ({
      cartaNova: [...prevState.cartaNova, cartaAtual], // pegar o array CartaNova, e colocar o cartaAtual no cartaNova
    }), () => this.setState({ ...initAllState })); // reseta para o estadoinicial
  }

    deleteCard = (param) => {
      const { cartaNova } = this.state;
      const filtroCartaNova = cartaNova.filter((e) => e.cardName !== param); // https://pt.stackoverflow.com/questions/209702/como-excluir-um-item-de-um-array-pelo-valor-do-atributo
      this.setState({ cartaNova: filtroCartaNova });
      //* pegar dentro do find e avaliar se hasTrunfo é true
      const cartaExcluida = cartaNova.find((e) => e.cardName === param);
      if (cartaExcluida.cardTrunfo === true) {
        this.setState({ hasTrunfo: false });
      }
    };

    render() { // criar sempre state no pai
      const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, // o componente __ deve receber as seguintes props:
        cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo,
        cartaNova } = this.state;
      return (
        <div>
          <h1>Tryunfo</h1>
          <div className="div-app">
            <section id="form-app">
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
            </section>
            <section id="card-app">
              <Card { ...this.state } />
            </section>
          </div>
          {cartaNova.map((e) => (
            <div key={ e.cardName }>
              <SavedCard
                cardName={ e.cardName }
                cardDescription={ e.cardDescription }
                cardAttr1={ e.cardAttr1 }
                cardAttr2={ e.cardAttr2 }
                cardAttr3={ e.cardAttr3 }
                cardImage={ e.cardImage }
                cardRare={ e.cardRare }
                cardTrunfo={ e.cardTrunfo }
                deleteCard={ this.deleteCard }
              />
            </div>))}

        </div>
      );
    }
}

export default App;
