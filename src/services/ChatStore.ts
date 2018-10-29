import { uniq } from 'lodash';
import { IObservableArray, observable } from 'mobx';

import { IMessage } from '../interfaces/IMessage';
import { IUser } from '../interfaces/IUser';
import { Events } from './Events';
import { SocketService } from './SocketsService';

export class ChatStore {
    @observable public connectedUsers: IUser[] = [];
    @observable public chatHistory: IMessage[] = [];
    @observable public usersTyping: string[] = [];
    @observable public temporaryMessages: string[]= [];

    constructor(socketService: SocketService) {
        this.updateHistory = this.updateHistory.bind(this);
        this.updateUsers = this.updateUsers.bind(this);
        this.addUserTyping = this.addUserTyping.bind(this);
        this.removeUserTyping = this.removeUserTyping.bind(this);
        this.userConnected = this.userConnected.bind(this);
        this.userDisconnected = this.userDisconnected.bind(this);

        socketService.on(Events.userListUpdate, this.updateUsers);
        socketService.on(Events.messagesUpdate, this.updateHistory);
        socketService.on(Events.userTyping, this.addUserTyping);
        socketService.on(Events.userStoppedTyping, this.removeUserTyping);
        socketService.on(Events.userConnected, this.userConnected);
        socketService.on(Events.userDisconnected, this.userDisconnected);

    }

    public updateUsers(userList: IUser[]): void {
        const users = this.connectedUsers as IObservableArray;
        users.replace(userList);
    }

    public updateHistory(messages: IMessage[]): void {
        if (messages && messages.length > 0) {
            const chatHistory = this.chatHistory as IObservableArray;
            chatHistory.replace(messages);
        }
    }

    public addUserTyping(userName: string): void {
        console.log('Add user typing: ', userName )
        const typing = this.usersTyping.concat([userName]);
        (this.usersTyping as IObservableArray).replace(uniq(typing));
    }
    public removeUserTyping(userName: string): void {
        const observableArray = this.usersTyping as IObservableArray;
        observableArray.remove(userName);
    }

    public displayTempMessage(msg:string): void {
        const tempMessages = this.temporaryMessages as IObservableArray;
        tempMessages.push(msg);
        setTimeout(()=> {
            tempMessages.remove(msg);
        }, 3000);

    }
    public userConnected(name: string) {
        const msg = `${name} joined!`;
        this.displayTempMessage(msg)
    }

    public userDisconnected(name: string) {
        const msg = `${name} left!`;
        this.displayTempMessage(msg)
    }
}

