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
    max-width: 80%;
  }
  button {
    font-size: 1.5rem;
  }
  @media (max-width: 640px) { 
    width: 90vw;
  }
`;

export const ChatStyles = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const MessagesStyles = styled.div`
  display: grid;
  grid-template-rows: 80vh 1fr;
  grid-template-columns: 100vw;
`;

export const MessagesContainerStyles = styled.div`
  background-color: #fed6fe;
  padding: 1rem;
  box-sizing: border-box;
  width: 90%;
  margin: 0 auto;
  ul {
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0 auto;
    list-style: none;
    overflow-y: scroll;
    li {
      padding: .5rem 1rem;
      border-bottom: 1px dashed #ccc;
    }
  }
`
export const ChatControlsStyles = styled.div`
    width: 90%;
    margin: 0 auto;
    background-color: #ccc;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    input {
      width: 100%;
      font-size: 1rem;
    }
`;