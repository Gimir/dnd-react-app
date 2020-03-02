import axios from 'axios';
import { UPDATE_CARD, ADD_CARD, REMOVE_CARD, SET_CARDS } from '../constants/actionTypes';
import routes from '../constants/routes';

//SYNC ACTION CREATORS
const setCardsSync = cards => ({
  type: SET_CARDS,
  payload: cards,
});

const addCardSync = card => ({
  type: ADD_CARD,
  payload: card,
});
const updateCardSync = (card, source, destination) => ({
  type: UPDATE_CARD,
  payload: {
    card,
    source,
    destination,
  },
});
const removeCardSync = (rowId, cardId) => ({
  type: REMOVE_CARD,
  payload: {
    rowId,
    cardId,
  },
});

//ASYNC ACTION CREATORS
export const setCards = () => {
  return (dispatch, getState) => {
    const { token } = getState().user;

    axios({
      method: 'get',
      url: routes.get_cards,
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
      .then(response => dispatch(setCardsSync(response.data)))
      .catch(err => console.log(err));
  };
};

export const addCard = (rowId, text) => {
  return (dispatch, getState) => {
    const { token } = getState().user;

    axios({
      method: 'post',
      url: routes.add_card,
      data: {
        row: String(rowId),
        text: text,
      },
      contentType: 'application/json',
      dataType: 'json',
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
      .then(response => dispatch(addCardSync(response.data)))
      .catch(err => console.log(err));
  };
};

export const updateCard = (cardId, source, destination) => {
  return (dispatch, getState) => {
    const { token } = getState().user;
    const row = getState().rows.find(row => String(row.id) === source.droppableId);
    const card = row.cards.find(card => String(card.id) === cardId);
    card.seq_num = destination.index;
    card.row = String(destination.droppableId);
    dispatch(updateCardSync(card, source, destination));
    axios({
      method: 'patch',
      url: routes.update_card(card.id),
      data: {
        row: destination.droppableId,
        seq_num: destination.index,
        text: card.text,
      },
      contentType: 'application/json',
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
      .then(() => console.log('Card reordered!'))
      .catch(err => {
        console.log(err);
        alert('Your chainges unsaved!');
      });
  };
};

export const removeCard = (rowId, cardId) => {
  return (dispatch, getState) => {
    const { token } = getState().user;
    dispatch(removeCardSync(rowId, cardId));
    axios({
      method: 'delete',
      url: routes.delete_card(cardId),
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
      .then(() => console.log('Card deleted!'))
      .catch(err => {
        alert('Your chainges unsaved!');
        console.log(err);
      });
  };
};
