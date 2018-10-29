import 'bulma/css/bulma.css';
import './App.css';

import { observable, when } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';

import { ChatView } from './components/ChatView';
import Login from './components/login';
import { ChatStore } from './services/ChatStore';
import { MessageService } from './services/MessageService';
import { SocketService } from './services/SocketsService';
import { UserService } from './services/UserService';

@observer
class App extends React.Component {
  private socketService: SocketService;
  private userService: UserService;
  private chatStore: ChatStore;
  private messageService: MessageService;
  @observable private isLoggedIn: boolean = false;

  constructor(props: Readonly<any>) {
    super(props);
    this.socketService = new SocketService();
    this.socketService.connect();
    this.userService = new UserService(this.socketService);
    this.chatStore= new ChatStore(this.socketService);
    this.messageService = new MessageService(this.socketService, this.userService);

    when(() => !!this.userService.currentUser, () => this.isLoggedIn = true);
  }



  public render() {
    return (
      <div className="App">
        <h1 className="title">
          Chat app
      </h1>
        <div>
          {
           !this.isLoggedIn ?
              <Login userService={this.userService} />
            : <ChatView users={this.chatStore.connectedUsers}  messages={this.chatStore.chatHistory} messageService={this.messageService}/>

          }

        </div>
      </div>
    );
  }
}

export default App;
