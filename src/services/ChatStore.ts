import {observable} from 'mobx';
import {IUser} from './UserStore';
export default class ChatStore {
    @observable  public  connectedUsers: IUser[] = [];


    public userConnected(user: IUser): void {
        this.connectedUsers.push(user);
    }
}