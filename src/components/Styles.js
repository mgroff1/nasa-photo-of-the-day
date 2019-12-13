import React, {
  useState,
  useEffect
} from 'react';
import styled from 'styled-components';

export const StyledBody = styled.div `
    display:flex;
      flex-direction:column;
    width:50vw;
    height:90vh;
    margin-left:25vw;
    justify-content:space-around;
    padding:2px;
    border-radius:15px;
    background:rgba(0,0,0255,.17);
      box-shadow: 0px 1px 18px 3px rgba(0,0,0,0.77);
`;


export const StyledCont = styled.div `
    display:flex;

    justify-self:center;
position:absolute;
`;
export const DateWrapper = styled.div `
      position:absolute;
      height:150px;
      width:150px;
      left:26vw;
      padding:10px;
  align-self:top;
`;
export const StyledPhoto = styled.img `
    max-width:25vw;
    max-height:25vh;
    margin:5px;
      margin-top:-50px;
    border: 1px solid black;
    border-radius: 20px;
        align-self:center;
    box-shadow: 0px 1px 18px 3px rgba(0,0,0,0.77);
    @media (min-width: 600px) {
      width: 50vw;

    }
  `;

export const StyledText = styled.p `
      font-size:1rem;
      max-width:30vw;
      height:20vh;
      margin-top:-50px;
      align-text:center;
      flex-wrap:wrap;
        align-self:center;
      j
`;
export const PhotoDiv = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Hdiv2 = styled.h2 `
  display: flex;
font-size:4rem;
  margin:0;
  padding:0;
  align-text: center;
  height:4.1rem;
  align-self:center;
`;

export const Hdiv3 = styled.h2 `
position:relative;
align-self:center;
  display: flex;
font-size:2rem;
  margin:0;
  margin-top:-80px;
  padding:0;
  align-text: center;
  max-height:2.1rem;
`;
