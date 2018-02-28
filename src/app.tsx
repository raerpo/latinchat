import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import * as io from 'socket.io-client';
import { IMessage } from './chatTypings';

const ChatStyles = styled.div`
`;

const MessagesStyles = styled.div`
`;

const UsersStyles = styled.div`
`;

const socket = io();

interface IChatState {
  message: string,
  messageList: string[]
}

class Chat extends React.Component<{}, IChatState> {
  state: IChatState = {
    message: '',
    messageList: []
  };
  componentDidMount() {
    // On every message, we should change the state
    socket.on('message', (message: string) => {
      const chat = this.state.messageList;
      this.setState({
        messageList: chat.concat(message)
      });
    });
  }
  handleChangeMessage = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      message: e.currentTarget.value
    });
  };
  handleSendMessage = () => {
    socket.emit('send message', this.state.message);
    // Clear message after send
    this.setState({
      message: ''
    });
  };
  renderMessages = (messages: string[]) => {
    return messages.map((message, index) => <li key={index}>{ message }</li>)
  }
  render() {
    return (
      <ChatStyles>
        <MessagesStyles>
         <ul>
            {this.renderMessages(this.state.messageList)}
          </ul>
          <div>
            <input
              type="text"
              value={this.state.message}
              onChange={this.handleChangeMessage}
            />
            <button onClick={this.handleSendMessage}>Enviar</button>
          </div>
        </MessagesStyles>
        <UsersStyles>

        </UsersStyles>
      </ChatStyles>
    );
  }
}


class LatinChatHome extends React.Component {
  render() {
    return <div>
      <div>Logo</div>
      <div>área Rosa</div>
      <div>
        
      </div>
    </div>
  }
}


ReactDOM.render(<Chat />, document.querySelector('#root'));
