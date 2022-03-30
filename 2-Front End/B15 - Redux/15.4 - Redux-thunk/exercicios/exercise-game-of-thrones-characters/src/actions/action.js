import charAPI from "../services/charAPI";

export const GET_CHARACTER = 'GET_CHARACTER';
export const REQUEST_CHARACTER = 'REQUEST_CHARACTER';
export const ERROR_CHARACTER = 'ERROR_CHARACTER';

export const requestCharacter = () => ({ type: REQUEST_CHARACTER });

export const getCharacter = (data) => ({
  type: GET_CHARACTER,
  data
});

export const errorCharacter = (error) => ({ 
  type: ERROR_CHARACTER,
  error
});

export function fetchCharacter(name) {
  return (dispatch) => {
    dispatch(requestCharacter(name));
    return charAPI(name)
      .then(
        (data) => dispatch(getCharacter(data)),
        (error) => {
          return dispatch(errorCharacter(error.message));
        },
      );
  };
};
