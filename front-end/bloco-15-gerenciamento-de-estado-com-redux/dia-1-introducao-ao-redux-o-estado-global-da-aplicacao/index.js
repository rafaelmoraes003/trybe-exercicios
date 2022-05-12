const Redux = require('redux');

// const ESTADO_INICIAL = {
//   login: false,
//   email: '',
// }

// const reducer = (state = ESTADO_INICIAL) => { // atribuindo valor padrão ao reducer
//   return state;
// }

// const store = Redux.createStore(reducer);

// console.log(store.getState())

const fazerLogin = (email) => { // actionCreator
  return {
    type: 'LOGIN',
    email,
  }
}

const ESTADO_INICIAL = {
  login: false,
  email: '',
}

const reducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin('rafasm003@gmail.com'));

console.log(store.getState());