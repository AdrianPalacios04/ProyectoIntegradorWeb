import React from "react";
import loginImg from "../../login.svg";
import firebase from 'firebase';
import "./style.scss";
import {Link} from 'react-router-dom';

export class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    //this.handleLogout = this.handleLogout.bind(this);
  }
  //componentWillMount (){
    //firebase.auth().onAuthStateChanged(user => {
      //this.setState({ user });
    //});
  //}
  handleAuth (){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    if(this.state.user){
      return(
      <Link to="/bagdes"></Link>
      )
    }else {

    }


  }
  renderLoginButton(){
    // si el usuario esta logueado
    if(this.state.user){
      return(
        <div>
          <Link to="/bagdes"></Link>
          Hola {this.state.user.displayName}
          <button onClick = {this.handleLogout}>Sign Out</button>
        </div>
      );
    }else {
      //return (
      // si no lo esta
      
      //)
    }
  }
  //handleLogout (){
    //firebase.auth().signOut()
  //.then(result => console.log('${result.user.email}ha salido'))
    //.catch(error => console.error('Error:${error.code}: ${error.message} ')) 

  //}
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Registro</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
          </div>
        </div>
          <div className="footer">
          <button type="button" className="btn" onClick={this.handleAuth}>
            Registrate con tu cuenta de Google
          </button>
        </div>
      </div>
    );
  }
}
export default Register;