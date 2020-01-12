import React, { Component } from 'react';
import Input from './common/input';

class loginForm extends Component {
    // username = React.createRef()

    state = {
        account : {
            username: '',
            password: ''
        },
        errors: {}
    }

    // componentDidMount(){
    //     this.username.current.focus()
    // }

    validate = () => {
      return {username: "Username is required."}
    }

    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account}
        // account.username = e.currentTarget.value
      account[input.name] = input.value
        this.setState({account})
    }

    handleSubmit = e => {
        e.preventDefault()  

        const errors = this.validate()
        this.setState({errors})
        if(errors) return

        // const username = this.username.current.value
        // call the server
        console.log("summitted")
    }
    render() { 
        const {account} = this.state

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