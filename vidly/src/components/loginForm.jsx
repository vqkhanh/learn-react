import React, { Component } from 'react';

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
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  value={this.state.account.username}
                  onChange={this.handleChange}
                  id="username"
                  name="username"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  value={this.state.account.password}
                  onChange={this.handleChange}
                  name="password"
                  id="password"
                  type="text"
                  className="form-control"
                />
              </div>
              <button className="btn btn-primary">Login</button>
            </form>
          </div>
        );
    }
}
 
export default loginForm;