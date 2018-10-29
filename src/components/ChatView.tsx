import * as React from 'react';

import { IMessage } from '../interfaces/IMessage';
import { IUser } from '../interfaces/IUser';
import { MessageService } from '../services/MessageService';
import { MessageForm } from './MessageForm';
import { Messages } from './Messages';
import { TemporaryMessages } from './TemporaryMessages';
import { UserList } from './UserList';
import { UsersTyping } from './UsersTyping';

export interface IChatViewProps {
    messages: IMessage[];
    users: IUser[];
    messageService: MessageService;
    usersTyping: string[];
    tempMessages: string[]
}

export class ChatView extends React.Component<IChatViewProps> {

    constructor(props: IChatViewProps) {
        super(props);

    }


    public render() {
        return (
            <div>
                <div className="chat-headers columns">
                    <div className="column is-one-quarter">
                        <h3 className="title is-3">
                            Users
                        </h3>
                    </div>
                    <div className="column is-three-quarters">
                        <h3 className="title is-3">
                            Messages
                        </h3>
                    </div>
                </div>
                <div className="chat-view columns">
                    <div className="column is-one-quarter"><UserList userList={this.props.users} /> </div>
                    <div className="column is-three-quarters">
                        <div className="messages box list">
                            <TemporaryMessages messages= {this.props.tempMessages}/>
                            <UsersTyping userNames={this.props.usersTyping} />
                            <Messages chatHistory={this.props.messages} />
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-one-quarter">
                        <div className="field-label is-normal">
                            <label className="label" htmlFor="message">Message text: </label>
                        </div>
                    </div>
                    <div className="column is-three-quarters"><MessageForm messageService={this.props.messageService} /> </div>
                </div>
            </div>
        );
    }
}
