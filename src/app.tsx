import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import * as io from 'socket.io-client';
import { IMessage } from './chatTypings';
import * as styles from './styles';

/* Latinchat chatroom */

const ChatStyles = styled.div``;

const MessagesStyles = styled.div``;

const UsersStyles = styled.div``;

const socket = io();

interface IChatProps {
  nickname: string;
}

interface IChatState {
  message: string;
  messageList: string[];
}

class Chat extends React.Component<IChatProps, IChatState> {
  state: IChatState = {
    message: '',
    messageList: []
  };
  componentDidMount() {
    // On every message, we should change the state
    socket.on('message', (message: IMessage) => {
      const chat = this.state.messageList;
      const newMessage = message.message;
      this.setState({
        messageList: chat.concat(newMessage)
      });
    });
  }
  handleChangeMessage = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      message: e.currentTarget.value
    });
  };
  handleSendMessage = () => {
    const message: IMessage = {message: this.state.message};
    socket.emit('send message', message);
    // Clear message after send
    this.setState({
      message: ''
    });
  };
  renderMessages = (messages: string[]) => {
    return messages.map((message, index) => <li key={index}>{message}</li>);
  };
  render() {
    return (
      <ChatStyles>
        <MessagesStyles>
          <ul>{this.renderMessages(this.state.messageList)}</ul>
          <div>
            <input
              type="text"
              value={this.state.message}
              onChange={this.handleChangeMessage}
            />
            <button onClick={this.handleSendMessage}>Enviar</button>
          </div>
        </MessagesStyles>
        <UsersStyles />
      </ChatStyles>
    );
  }
}

/* Latinchat home */

interface ILatinChatProps {
  setNickName: (nickname: string) => void;
}

interface ILatinChatState {
  nickname: string;
}

class LatinChatHome extends React.Component<ILatinChatProps, ILatinChatState> {
  state: ILatinChatState = {
    nickname: ''
  };
  handleChangeNicknameInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      nickname: e.currentTarget.value
    });
  };
  handleSetNickName = () => {
    this.props.setNickName(this.state.nickname);
  };
  render() {
    return (
      <styles.LatinChatHome>
        <div>
          <img src="http://photos1.blogger.com/blogger/1102/2841/320/latinchat.jpg" alt=""/>
        </div>
        <styles.LatinChatHomeInputNickname>
          <styles.LatinChatHomeRoomTitle>
            Sala Rosa
          </styles.LatinChatHomeRoomTitle>
          <label htmlFor="nickname">Ingresa tu nickname</label>
          <input
            type="text"
            name="nickname"
            id="nickname"
            value={this.state.nickname}
            onChange={this.handleChangeNicknameInput}
          />
          <br />
          <button onClick={this.handleSetNickName}>Entrar</button>
        </styles.LatinChatHomeInputNickname>
      </styles.LatinChatHome>
    );
  }
}

/* Latinchat app */

class App extends React.Component {
  state = {
    nickname: ''
  };
  setNickName = (nickname: string) => {
    this.setState({
      nickname
    });
  };
  render() {
    const { nickname } = this.state;
    return nickname === '' ? (
      <LatinChatHome setNickName={this.setNickName} />
    ) : (
      <Chat nickname={nickname} />
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
