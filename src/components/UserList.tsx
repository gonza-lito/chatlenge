import 'bulma';

import { map } from 'lodash';
import { observer } from 'mobx-react';
import * as React from 'react';
import { IUser } from 'src/interfaces/IUser';

import { User } from './User';

export interface IUserListProps {
    userList: IUser[];
}

@observer
export class UserList extends React.Component<IUserListProps> {

    constructor(props: IUserListProps) {
        super(props);

    }

    public componentDidMount(): void {
        console.log('users list', this.props.userList);
    }
    public render() {
        const users = map(this.props.userList, (user) => <User key={user.id} user={user} />);
        return (

            <div className="users box list">
                <ul>
                {users}
                </ul>
            </div>


        );
    }
}
