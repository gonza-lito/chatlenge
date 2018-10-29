import { observable } from 'mobx';
import { IUser } from 'src/interfaces/IUser';

import { Events } from './Events';
import { SocketService } from './SocketsService';

export class UserService {
    @observable public currentUser?: IUser;
    private socketService: SocketService;

    constructor(socket: SocketService) {
        this.socketService = socket;

        this.socketService.on('disconnect',this.logOut)
    }

    public logIn(username: string): Promise<IUser | string> {
       return new Promise((resolve, reject) =>{
        this.socketService.emit(Events.userLogIn, username, (userOrError: IUser| string)=> {
            if(typeof userOrError === 'string') {
                reject(userOrError);
                this.currentUser = undefined;
            } else {
                this.currentUser = userOrError;
                resolve(this.currentUser);
            }
        });
       })


    }

    public logOut(): void {
        this.currentUser = undefined;
    }



}

