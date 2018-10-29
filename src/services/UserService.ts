import { observable } from 'mobx';
import { IUser } from 'src/interfaces/IUser';

import { Events } from './Events';
import { SocketService } from './SocketsService';

export class UserService {
    @observable public currentUser?: IUser;
    private socketService: SocketService;

    constructor(socket: SocketService) {
        this.socketService = socket;

        this.socketService.on('disconnect',this.logOut )
    }

    public logIn(username: string): void {
        this.socketService.emit(Events.userLogIn, username, (user: IUser)=> {
            this.currentUser = user;
        } );

    }

    public logOut(): void {
        this.currentUser = undefined;
    }



}

