import 'bulma';

import * as React from 'react';

import { MessageService } from '../services/MessageService';

export interface IMessageFormProps {
    messageService: MessageService;
}

interface IMessageFormState {
    messageText: string;
}

export class MessageForm extends React.Component<IMessageFormProps, IMessageFormState> {

    constructor(props: IMessageFormProps) {
        super(props);
        this.state = {
            messageText: ''

        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    public handleSubmit(evt: React.FormEvent<HTMLFormElement>): void {
        evt.preventDefault();

        this.props.messageService.sendMessage(this.state.messageText)
        this.setState({ messageText: '' });

    }

    public handleOnChange(evt: any): void {
        this.props.messageService.sendTyping();
        this.setState({ messageText: evt.target.value });
    }

    public render() {
        return (

            <div className="message-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="field is-horizontal">
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input" name="message" type="text" placeholder="Text" value={this.state.messageText} onChange={this.handleOnChange} />
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


        );
    }
}

