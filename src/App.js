import React from 'react';
import axios from 'axios'
import Photo from './components/Photo';
import styled from 'styled-components';
import ModernDatepicker from 'react-modern-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledApp = styled.div`
  text-align: center;
`;

function App() {
  return (
    <StyledApp>
      <h1>NASA Photo of the Day!</h1>
      <Photo />
    </StyledApp>
  );
}

export default App;
