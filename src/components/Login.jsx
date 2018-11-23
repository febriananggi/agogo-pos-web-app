import React, { Component } from "react";
import UserCard from './UserCard'
import Keyboard from "react-simple-keyboard";
import CalcNumeric from './CalcNumeric'
import { FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import LogoAgogo from "./../img/logo-agogo.png";


import '../sass/Login.scss';

class Login extends Component {

  constructor(props) {
    super(props);
  };

  state = {
    users: [],
    user: [],
    userAvatar: '',
    password: '',
    username: '',
    redirect: false
  };

  componentDidMount(){

    if(sessionStorage.getItem('users')){
      console.log('User logged in')
    }else{
      this.state({ redirect: true })
    }

    console.log(this.props)
    let user_index = this.props.match.params.user_index;
    let users = sessionStorage.getItem('users');
    this.setState({ users: JSON.parse(users)},
    () => {
      this.setState({
        user: this.state.users[user_index]
      },
      () => {
        console.log(this.state.user)
        this.setState({
          username: this.state.user.slug,
          userAvatar: this.state.user.avatar_urls['96']
        },
        () => {
          console.log("USERNAME")
          console.log(this.state.username)
          console.log(this.state.userAvatar)
        });
      });
    });

    
    
  }

  onChange = input => {
    this.setState({ password: input });
    console.log("Password changed", input);
  };

  onChangeInput = event => {
    let input = event.target.value;
    this.setState({ password: input });
    console.log("Password changed", input);
  };

  onEnter = () => {
    console.log("ENTERRRRRRR DARI CHILD KEYBOARD")
    this.login()
  }

  encodedData(data) {
    return Object.keys(data).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
    }).join('&');
  }

  login = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password,
    };

    axios.post(`http://dev.wakwaw.com/agogo/wp-json/jwt-auth/v1/token`, this.encodedData(userData) )
      .then(res => {
        console.log(res);
        console.log(res.data);
        sessionStorage.setItem('token', res.data.token);
        this.setState({ redirect: true })
      })
  }

  logout = () => {
    sessionStorage.setItem('token', '');
    sessionStorage.clear();
    this.setState({ redirect: true })
  }

  render() {

    if(this.state.redirect || sessionStorage.getItem('token')){
      return (<Redirect to={'/'} />);
    }

    return (
      <section className="Login">
        <div className="container">

          <div className="row">
            <div className="col login-header">
              <div className="row">
                <div className="col-6">
                  <a href="/"><i className="fas fa-arrow-left mr-5"></i> Sign In</a> 
                </div>
                <div className="col-6 text-right">
                  <img src={LogoAgogo} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6 box-pin">
              <div className="box-inner">

                <UserCard 
                  user={this.state.user} 
                  userID={this.state.user.id} 
                  userName={this.state.user.name} 
                  userAvatar={this.state.userAvatar} 
                  colorTitle="text-black" 
                  colorSubTitle="text-red" 
                />

                <FormGroup className="mt-4">
                  <Label for="PIN" className="text-center d-block">Masukan PIN Anda</Label>
                  <Input 
                    value={this.state.password} 
                    onChange={e => this.onChangeInput(e)}
                    type="password" name="password" id="pin" placeholder="PIN"  size="lg" className="text-center" />
                </FormGroup>
              </div>
            </div>
            <div className="col-6 box-calc">
              <div className="box-inner">
                <CalcNumeric 
                  onChange={this.onChange} 
                  onChangeInput={this.onChangeInput} 
                  onEnter={this.onEnter} 
                />
              </div>
            </div>
          </div>
          
        </div>
      </section>
    )
  }
}

export default Login