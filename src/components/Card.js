import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

import colors from '../constants/colors';

import RemoveCardBtn from '../containers/RemoveCardBtn';

const Container = styled.div`
  width: 100%;
  min-height: 80px;
  margin: 5px 0;
  padding: 10px 5px;
  background-color: ${colors.card_background};
  color: ${colors.card_text};
  position: relative;
  font-size: 16px;
`;
const btnPosition = {
  position: 'absolute',
  right: '2px',
  top: '2px',
};

const Card = ({ card, index }) => {
  return (
    <Draggable draggableId={String(card.id)} index={index}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          {card.text}
          <RemoveCardBtn rowId={card.row} cardId={card.id} size={15} position={btnPosition} />
        </Container>
      )}
    </Draggable>
  );
};

export default Card;
