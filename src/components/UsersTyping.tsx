import { head, last, without } from 'lodash';
import { observer } from 'mobx-react';
import * as React from 'react';

export interface IUsersTypingProps {
    userNames: string[];
}

@observer
export class UsersTyping extends React.Component<IUsersTypingProps> {

    constructor(props: IUsersTypingProps) {
        super(props);

    }


    public render() {
        const userNames = this.props.userNames;
        let usersTypingString: string;
        switch (userNames.length) {
            case 0:
                usersTypingString = '';
                break
            case 1:
                usersTypingString = `${head(userNames)} is typing`;
                break;
            default:
                const lastUserName = last(userNames);
                usersTypingString = without(userNames, lastUserName).join(', ') + ` and ${lastUserName} are typing`;
                break;
        }
        return (

            <span className="users-typing">
                {usersTypingString}
            </span>


        );
    }
}
