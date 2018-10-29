import { map } from 'lodash';
import { observer } from 'mobx-react';
import * as React from 'react';

export interface ITemporaryMessagesProps {
    messages: string[];
}

@observer
export class TemporaryMessages extends React.Component<ITemporaryMessagesProps> {

    constructor(props: ITemporaryMessagesProps) {
        super(props);

    }


    public render() {
        const messages = map(this.props.messages, (msg) => <i>{msg}</i>);
        return (
            <div className="temp-messages">
             {messages}
            </div>
        );
    }
}
