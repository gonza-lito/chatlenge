import { IObservableArray, observable } from 'mobx';

import { IMessage } from '../interfaces/IMessage';
import { IUser } from '../interfaces/IUser';
import { Events } from './Events';
import { SocketService } from './SocketsService';

export class ChatStore {
    @observable public connectedUsers: IUser[] = [];
    @observable public chatHistory: IMessage[] = [];

    constructor(socketService: SocketService) {
        this.updateHistory = this.updateHistory.bind(this);
        this.updateUsers = this.updateUsers.bind(this);
        socketService.on(Events.userListUpdate, this.updateUsers);
        socketService.on(Events.messagesUpdate, this.updateHistory);
    }

    public updateUsers(userList: IUser[]): void {
        console.log('Updating users', userList)
        const users = this.connectedUsers as IObservableArray;
        users.replace(userList);
    }

    public updateHistory(messages: IMessage[]): void {
        if(messages && messages.length > 0) {
            const chatHistory = this.chatHistory  as IObservableArray;
            chatHistory.replace(messages);
        }

    }
}

