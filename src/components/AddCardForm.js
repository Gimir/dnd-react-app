import React from 'react';
import styled from 'styled-components';

import colors from '../constants/colors';

import CloseBtn from './CloseBtn';

const Container = styled.div`
  width: 100%;
  position: relative;
`;
const FormContainer = styled.form`
  width: 100%;
  padding: 10px;
  display: ${props => (props.show ? 'block' : 'none')};

  textarea {
    width: 100%;
    height: 80px;
    background-color: ${colors.input_background};
    color: ${colors.input_text};
    padding: 5px;
    margin-bottom: 10px;
    border: none;
    resize: none;
  }
  button {
    width: 60%;
    height: 30px;
    border: none;
    background-color: ${colors.add_button_background};
    color: ${colors.input_text};
    line-height: 25px;
    font-size: 15px;
    padding: 0 15px;
    cursor: pointer;
  }
`;
const OpenFormBtn = styled.div`
  height: 40px;
  width: 100%;
  position: relative;
  cursor: pointer;
  display: ${props => (props.show ? 'block' : 'none')};

  &:hover {
    background-color: ${colors.card_background};
  }
  p {
    color: ${colors.input_text};
    margin-left: 40px;
    line-height: 40px;
  }
`;
const PlusIcon = styled.div`
  width: 12px;
  height: 2px;
  background-color: ${colors.input_text};
  position: absolute;
  left: 10px;
  top: 50%;
  margin-top: -1px;
  &:after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${colors.input_text};
    position: absolute;
    left: 0;
    top: 0;
    transform: rotate(90deg);
  }
`;
const closeBtnPosition = {
  position: 'absolute',
  bottom: '15px',
  right: '20px',
};

const AddCardForm = ({
  onShowFormClick,
  onCloseFormClick,
  onAddCardClick,
  onInputChange,
  inputValue,
  formActive,
}) => (
  <Container>
    <OpenFormBtn show={!formActive} onClick={onShowFormClick}>
      <PlusIcon />
      <p>Add card</p>
    </OpenFormBtn>
    <FormContainer show={formActive}>
      <textarea value={inputValue} onChange={onInputChange} />
      <button onClick={onAddCardClick}>Add card</button>
      <CloseBtn size={20} position={closeBtnPosition} onClick={onCloseFormClick} />
    </FormContainer>
  </Container>
);

export default AddCardForm;
