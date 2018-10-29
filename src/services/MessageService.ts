import { IMessage } from '../interfaces/IMessage';
import { Events } from './Events';
import { SocketService } from './SocketsService';
import { UserService } from './UserService';

export class MessageService {
    public userService: UserService;
    private socket: SocketService;

    constructor(socket: SocketService, userService: UserService) {
        this.socket = socket;
        this.userService = userService;
    }

    public sendMessage(messageText: string): void {

        if (!this.userService.currentUser) {
            throw Error('User not logged in!')
        }
        const message: IMessage = { userName: this.userService.currentUser.name, text: messageText, timestamp: new Date() }
        this.socket.emit(Events.messageSend, message);
    }

    public sendTyping(): void {
        if (!this.userService.currentUser) { return }
        this.socket.emit(Events.userTyping, this.userService.currentUser.name);
    }
    public sendStopTyping(): void {
        if (!this.userService.currentUser) { return }
        this.socket.emit(Events.userStoppedTyping,  this.userService.currentUser.name);
    }
}

