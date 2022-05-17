const INITIAL_STATE = {
  character: '',
  loading: false,
  error: ''
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'GET':
      return {
        ...state,
        loadind: false,
        character: action.payload,
      }
    case 'ERROR':
      return {
        error: action.payload,
      }
  }
}

export default reducer;