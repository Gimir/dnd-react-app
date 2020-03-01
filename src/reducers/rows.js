import { UPDATE_CARD, ADD_CARD, REMOVE_CARD, SET_CARDS } from '../constants/actionTypes';

const initialState = [
  {
    id: 0,
    title: 'on hold',
    cards: [],
  },
  {
    id: 1,
    title: 'in progress',
    cards: [],
  },
  {
    id: 2,
    title: 'needs review',
    cards: [],
  },
  {
    id: 3,
    title: 'approved',
    cards: [],
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS:
      return state.map(row => {
        return {
          ...row,
          cards: action.payload.filter(card => Number(card.row) === row.id),
        };
      });
    case UPDATE_CARD:
      const { card, source, destination } = action.payload;
      return state.map(row => {
        if (String(row.id) === destination.droppableId && String(row.id) === source.droppableId) {
          const newCards = Array.from(row.cards);
          newCards.splice(source.index, 1);
          newCards.splice(destination.index, 0, card);
          return {
            ...row,
            cards: newCards,
          };
        }
        if (String(row.id) === destination.droppableId) {
          const newCards = Array.from(row.cards);
          newCards.splice(destination.index, 0, card);
          return {
            ...row,
            cards: newCards,
          };
        }
        if (String(row.id) === source.droppableId) {
          const newCards = Array.from(row.cards);
          newCards.splice(source.index, 1);
          return {
            ...row,
            cards: newCards,
          };
        }
        return row;
      });
    case ADD_CARD:
      return state.map(row => {
        if (String(row.id) === action.payload.row) {
          return {
            ...row,
            cards: [...row.cards, action.payload],
          };
        }
        return row;
      });
    case REMOVE_CARD:
      const { rowId, cardId } = action.payload;
      return state.map(row => {
        if (String(row.id) === rowId) {
          return {
            ...row,
            cards: row.cards.filter(card => card.id !== cardId),
          };
        }
        return row;
      });
    default:
      return state;
  }
};
