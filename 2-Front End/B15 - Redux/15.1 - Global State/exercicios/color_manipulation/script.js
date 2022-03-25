const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index < state.colors.length - 1 ? state.index += 1 : 0,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index > 0 ? state.index -= 1 : state.colors.length - 1,
      }
    case 'ADD_COLOR':
      return{
        ...state,
        colors: [...state.colors, criarCor()],
      }
    default:
      return state;
  }
}

const store = Redux.createStore(reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Subscriber

store.subscribe(() => {
  const { colors, index } = store.getState();
  const colorText = document.querySelector('#value');
  const container = document.querySelector('#container');
  colorText.innerHTML = colors[index]
  container.style.backgroundColor = colors[index]
  if (colors[index] === 'black') {
    document.querySelector('p').style.color = 'white';
  } else {
    document.querySelector('p').style.color = 'black';
  }
})

// Listeners

const PREVIOUS_BUTTON = document.querySelector('#previous');
const NEXT_BUTTON = document.querySelector('#next');
const RANDOM_BUTTON = document.querySelector('#random');

PREVIOUS_BUTTON.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' })
})

NEXT_BUTTON.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' })
})

RANDOM_BUTTON.addEventListener('click', () => {
  store.dispatch({ type: 'ADD_COLOR' })
})
