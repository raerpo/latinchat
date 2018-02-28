import * as React from 'react';
import styled from 'styled-components';

export const LatinChatHome = styled.main`
  display: grid;
  grid-template-rows: 200px 1fr;
  grid-template-columns: 1fr;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const LatinChatHomeRoomTitle = styled.h3`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  background-color: #ff66cd;
  margin: 0px 0px 2rem 0px;
  text-align: left;
  padding: 0.5rem;
  box-sizing: border-box;
`;

export const LatinChatHomeInputNickname = styled.div`
  background-color: #fed6fe;
  width: 60vw;
  margin: 0px auto;
  padding: 0px 0px 2rem 0px;
  border-radius: 10px;
  position: relative;
  label {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  input {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  button {
    font-size: 1.5rem;
  }
`;