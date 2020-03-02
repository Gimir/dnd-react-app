import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import { logIn } from '../actions/user';
import { setCards, updateCard } from '../actions/rows';

import TaskPageWrapper from '../components/TaskPageWrapper';
import Row from '../components/Row';

const TasksPage = ({ logIn, setCards, token, rows, updateCard }) => {
  useEffect(() => {
    logIn();
  }, []);
  useEffect(() => {
    if (token) setCards();
  }, [token]);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    updateCard(draggableId, source, destination);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TaskPageWrapper>
        {rows.map(row => (
          <Row key={row.id} row={row} />
        ))}
      </TaskPageWrapper>
    </DragDropContext>
  );
};

const mapStateToProps = state => ({
  token: state.user.token,
  rows: state.rows,
});
const mapDispatchToProps = dispatch => ({
  logIn: () => dispatch(logIn()),
  setCards: () => dispatch(setCards()),
  updateCard: (cardId, source, destination) => dispatch(updateCard(cardId, source, destination)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
