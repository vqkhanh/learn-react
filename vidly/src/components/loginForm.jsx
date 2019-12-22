import React, { Component } from 'react';
import Input from './common/input';

class loginForm extends Component {
    // username = React.createRef()

    state = {
        account : {
            username: '',
            password: ''
        }
    }

    // componentDidMount(){
    //     this.username.current.focus()
    // }

    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account}
        // account.username = e.currentTarget.value
      account[input.name] = input.value
        this.setState({account})
    }

    handleSubmit = e => {
        e.preventDefault()  
        const username = this.username.current.value
        console.log("summitted")
    }
    render() { 
        return (
          <div>
            <h1></h1>
            <form onSubmit={this.handleSubmit}>
              <Input
                name="username"
                value={account.username}
                label="Username"
                onChange={this.handleChange}
              />
               <Input
                name="password"
                value={account.password}
                label="Password"
                onChange={this.handleChange}
              />
              <button className="btn btn-primary">Login</button>
            </form>
          </div>
        );
    }
}
 
export default loginForm;