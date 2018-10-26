import * as socketio from 'socket.io-client';

import { config } from '../config';
import { Events } from './Events';
import { IUser } from './UserService';

export class SocketService {
    private socketConnection: SocketIOClient.Socket;

    public connect(): void {
        this.socketConnection = socketio(config.serverUrl);
        this.socketConnection.on('connect', () => {
            // tslint:disable-next-line:no-console
            console.log('connected');
        })
    }


    public getSocket(): SocketIOClient.Socket { return this.socketConnection }

}