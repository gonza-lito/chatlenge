import 'bulma/css/bulma.css';
import './App.css';

import * as React from 'react';

import Login from './components/login';
import { SocketService } from './services/SocketsService';

class App extends React.Component {
  private socketService: SocketService;

  constructor(props: Readonly<any>){
    super(props);
    this.socketService = new SocketService();
    this.socketService.connect();
  }



  public render() {
    return (
      <div className="App">
        <h1 className="title">
       Chat app
      </h1>
        <div>
        <Login/>
        </div>
      </div>
    );
  }
}

export default App;
