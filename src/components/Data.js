import React from 'react';
import styled from 'styled-components';

const DataDiv = styled.div`
display:flex;
  width: 50vw;
  margin: 10px auto;
  padding: 0;
  @media (min-width: 800px) {
    max-width: 600px;
  }
`;

const DataH2 = styled.h2`
position:absolute;
top:20%;
  width: 10vw;
  margin: 10px 0;
  padding: 0;
  @media (min-width: 800px) {
    max-width: 600px;
  }
`;

const DataH3 = styled.h3`
display:flex;
  width: 50vw;
  margin: 10px auto;
  padding: 0;
  @media (min-width: 800px) {
    max-width: 600px;
  }
`;

function Data(props) {
  return (

    <DataDiv>
  <DataH2>{props.title}</DataH2>

      <p>{props.about}</p>

        <h3>{props.date}</h3>
    </DataDiv>
  )
}

export default Data;
