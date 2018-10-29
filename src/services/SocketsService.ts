import * as socketio from 'socket.io-client';

import { config } from '../config';

export class SocketService {
    private socketConnection: SocketIOClient.Socket;

    public connect(): void {
        this.socketConnection = socketio(config.serverUrl);
        this.socketConnection.on('connect',() => console.log('connected to socket'))
    }

    public emit(event: string, ...args:any[]): void {
        this.socketConnection.emit(event, ...args);
    }
    public on(event: string, callback: (...args: any[]) => void): void {
        this.socketConnection.on(event, callback);
    }

    public getSocket(): SocketIOClient.Socket { return this.socketConnection }

}