import { SocketService } from './SocketsService';

export class UserService {
    private socket: SocketService;
    constructor(socket: SocketService) {
        this.socket = socket;
    }

    public logIn(user: IUser): void {
        this.socket.login(user);
    }

}

export interface IUser {
    name: string;
    id: string;
}
