import React from 'react';
import { connect } from 'react-redux';

import { removeCard } from '../actions/rows';

import CloseBtn from '../components/CloseBtn';

const RemoveCardBtn = ({ rowId, cardId, removeCard, position, size }) => {
  const onRemoveCardClick = () => {
    removeCard(rowId, cardId);
  };
  return <CloseBtn onClick={onRemoveCardClick} position={position} size={size} />;
};

const mapDispatchToProps = dispatch => ({
  removeCard: (rowId, cardId) => dispatch(removeCard(rowId, cardId)),
});

export default connect(null, mapDispatchToProps)(RemoveCardBtn);
