import { observer } from 'mobx-react';
import * as React from 'react';
import { UserService } from 'src/services/UserService';

export interface ILoginFormProps {
    userService: UserService;
}

interface ILoginFormState {
    userName: string;
    errorMessage?: string;
}

@observer
class Login extends React.Component<ILoginFormProps, ILoginFormState> {

    constructor(props: ILoginFormProps) {
        super(props);
        this.state = {
            errorMessage: undefined,
            userName: ''
        };
       this.handleOnChange = this.handleOnChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }
    public handleSubmit(evt: React.FormEvent<HTMLFormElement>):void {
        evt.preventDefault();
        this.props.userService.logIn(this.state.userName).then(undefined,(error)=> {
            this.setState({errorMessage: error});
        })

        this.setState({errorMessage: undefined});

     }

     public handleOnChange(evt:any) : void {
        this.setState({userName:evt.target.value});
     }

    public render() {
        const error =   <span className="has-text-danger">{this.state.errorMessage}</span>;
        return (

                <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="User name, press enter to log in..." value={this.state.userName} onChange={this.handleOnChange}/>
                            {
                                this.state.errorMessage ? error: ''
                            }

                        </div>
                    </div>
                    </form>
                </div>


        );
    }
}

export default Login;