import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

import colors from '../constants/colors';

import Card from './Card';
import CardForm from '../containers/CardForm';

const Container = styled.div`
  width: 300px;
  min-height: 50px;
  margin: 20px;
  background-color: ${colors.row_background};
`;
const Title = styled.h3`
  font-size: 22px;
  text-transform: uppercase;
  color: ${colors.row_title};
  width: 100%;
  height: 30px;
  padding: 0 10px;
  line-height: 30px;
  text-align: left;
  background-color: ${props => colors[props.title]};
`;
const CardList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px 0 10px;
`;

const Row = ({ row, cards }) => {
  return (
    <Container>
      <Title title={row.title}>
        {row.title} {`(${row.cards.length})`}
      </Title>
      <Droppable droppableId={String(row.id)}>
        {provided => (
          <CardList ref={provided.innerRef} {...provided.droppableProps}>
            {cards.map((card, index) => (
              <Card key={card.id} card={card} index={index} />
            ))}
            {provided.placeholder}
          </CardList>
        )}
      </Droppable>
      <CardForm rowId={row.id} />
    </Container>
  );
};

export default Row;
