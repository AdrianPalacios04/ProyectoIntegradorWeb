import React from "react";
import loginImg from "../../login.svg";
import firebase from 'firebase';
import "./style.scss";
import { Button } from 'reactstrap';

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentWillMount (){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }
  handleAuth (){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => console.log('${result.user.email}ha iniciado sesion'))
    .catch(error => console.error('Error:${error.code}: ${error.message} '))
  }
  renderLoginButton(){
     //si el usuario esta logueado
    if(this.state.user){
      return(
        <div>
          <img src = {this.state.user.photoURL} alt={this.state.user.displayName}/>
          Hola {this.state.user.displayName}
          <button onClick = {this.handleLogout}>Sign Out</button>
        </div>
      );
    }else {
      return (
          <Button color="info" onClick={this.handleAuth}>
            Ingresa con cuenta Googgle
          </Button>
      )
    }
  }
  handleLogout (){
    firebase.auth().signOut()
    .then(result => console.log('${result.user.email}ha salido'))
    .catch(error => console.error('Error:${error.code}: ${error.message} ')) 

  }
  
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg}/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Email</label>
              <input type="text" name="password" placeholder="email" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn btn-danger">
            Login
          </button>
        </div>
        <div className="footer">
            {this.renderLoginButton()}
          </div>
      </div>
    );
  }
}
export default Login;
