import * as React from 'react';
import { IUser } from 'src/interfaces/IUser';

export interface IUserProps {
    user: IUser;
}


export class User extends React.Component<IUserProps> {

    constructor(props: IUserProps) {
        super(props);

    }


    public render() {
        return (
                <li>
                    <label>
                        {this.props.user.name}
                    </label>
                </li>

        );
    }
}
