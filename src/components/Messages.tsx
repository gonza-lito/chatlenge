import { map } from 'lodash';
import { observer } from 'mobx-react';
import * as React from 'react';
import { IMessage } from 'src/interfaces/IMessage';

import { Message } from './Message';

export interface IMessagesProps {
    chatHistory: IMessage[];
}

@observer
export class Messages extends React.Component<IMessagesProps> {

    constructor(props: IMessagesProps) {
        super(props);

    }

    public render() {
        return (
            <ul>
                {map(this.props.chatHistory, (msg) => <Message key={msg.id} message={msg} />)}
            </ul>
        );
    }
}
