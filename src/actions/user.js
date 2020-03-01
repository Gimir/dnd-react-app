import axios from 'axios';
import { LOG_IN } from '../constants/actionTypes';
import routes from '../constants/routes';

//SYNC ACTION CREATORS
const logInSync = token => ({
  type: LOG_IN,
  payload: token,
});

//ASYNC ACTION CREATORS
export const logIn = () => {
  return (dispatch, getState) => {
    const { username, password } = getState().user;
    axios({
      method: 'post',
      url: routes.log_in,
      data: {
        username: username,
        password: password,
      },
      contentType: 'application/json',
      dataType: 'json',
    })
      .then(responce => {
        dispatch(logInSync(responce.data.token));
      })
      .catch(err => console.log(err));
  };
};
