import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { addCard } from '../actions/rows';

import AddCardForm from '../components/AddCardForm';

const CardForm = ({ addCard, rowId }) => {
  const [inputValue, setInputValue] = useState('');
  const [formActive, setFormActive] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const textareaEl = useRef(null);

  useEffect(() => {
    if (formActive) textareaEl.current.focus();
  }, [formActive]);

  const onShowFormClick = () => {
    setFormActive(true);
  };
  const onCloseFormClick = () => {
    setFormActive(false);
    setInputValue('');
  };
  const onAddCardClick = e => {
    e.preventDefault();
    setFormActive(false);
    addCard(rowId, inputValue);
    setInputValue('');
  };
  const onInputChange = e => {
    if (e.target.value) setIsFormValid(true);
    else setIsFormValid(false);
    setInputValue(e.target.value);
  };

  return (
    <AddCardForm
      isFormValid={isFormValid}
      inputRef={textareaEl}
      inputValue={inputValue}
      formActive={formActive}
      onShowFormClick={onShowFormClick}
      onCloseFormClick={onCloseFormClick}
      onAddCardClick={onAddCardClick}
      onInputChange={onInputChange}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  addCard: (rowId, text) => dispatch(addCard(rowId, text)),
});

export default connect(null, mapDispatchToProps)(CardForm);
