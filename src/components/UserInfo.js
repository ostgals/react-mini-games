import React from 'react';
import { providers, auth, database } from '../firebase';

export default class UserInfo extends React.Component {

  state = {
    user: null
  }

  login(providerName) {
    const Provider = providers[providerName];
    if (!Provider) {
      console.error('No provider found!');
      return;
    }
    auth.signInWithPopup(new Provider()).then(result => {
      console.log('Signed in successfully!', result.user);
    });
  }

  componentWillMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  render() {
    const { user } = this.state;
    return (!user) ? (
      <div className="user-info">
        <h3>Привет, ниндзя!</h3>
        <p>Ты настолько скрытен, что никто не может узнать о твоих достижениях. Но если ты хочешь посоревноваться с другими игроками, залогинься с помощью одной из кнопок, и &ndash; кто знает? &ndash; может твое имя попадет в список лучших!</p>
        <button className="auth google" onClick={() => this.login('google')}>Google</button>
        <button className="auth facebook" onClick={() => this.login('facebook')}>Facebook</button>
        <button className="auth twitter" onClick={() => this.login('twitter')}>Twitter</button>
      </div>
    ) : (
      <div className="user-info">
        <img className="avatar" src={user.photoURL} width="200" />
        <div className="info">
          <h3>{user.displayName}</h3>
          <span>Количество твоих звезд: </span>
        </div>
      </div>
    )
  }

}
