import 'bulma';

import * as React from 'react';

import { IMessage } from '../interfaces/IMessage';

export interface IMessageProps {
    message: IMessage;
}


export class Message extends React.Component<IMessageProps> {

    constructor(props: IMessageProps) {
        super(props);

    }


    public render() {
        return (
            <li>
                <i>{this.props.message.userName}:</i>
                <span>{this.props.message.text}</span>
            </li>

        );
    }
}
