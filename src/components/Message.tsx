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
            <li className="columns">
                <b className="column is-1 has-text-right">{this.props.message.userName}:</b>
                <i className="column has-text-left">{this.props.message.text}</i>
            </li>

        );
    }
}
