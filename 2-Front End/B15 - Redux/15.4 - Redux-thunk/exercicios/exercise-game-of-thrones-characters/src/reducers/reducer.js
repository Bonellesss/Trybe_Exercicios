import { ERROR_CHARACTER, GET_CHARACTER, REQUEST_CHARACTER } from "../actions/action";

const INITIAL_STATE = {
  loading: false,
  charater: '',
  error: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CHARACTER:
      return {
        ...state,
        loading: true
      }
      case GET_CHARACTER:
        return {
          ...state,
          loading: false,
          charater: action.data[0]
        }
      case ERROR_CHARACTER:
        return {
          ...state,
          loading: false,
          error: action.error
        }
    default:
      return state;
  }
}

export default reducer;