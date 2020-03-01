import { LOG_IN } from '../constants/actionTypes';

const initialState = {
  username: 'Abbas',
  password: 'Abbas1234...',
  token: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
