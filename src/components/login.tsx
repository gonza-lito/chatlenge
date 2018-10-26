import 'bulma';
import * as React from 'react';



class Login extends React.Component {
    public handleSubmit(evt: React.FormEvent<HTMLFormElement>): void {
        evt.preventDefault();

    }

    
    public render() {
        return (
            
                <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Text input" />
                        </div>
                    </div>
                    </form>
                </div>
        

        );
    }
}

export default Login;