import styled from 'styled-components';
import colors from '../constants/colors';

const TaskPageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.body_background};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px 0;
`;

export default TaskPageWrapper;
