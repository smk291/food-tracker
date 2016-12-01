import React from 'react';
import axios from 'axios';
import MainPage from './MainPage';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import Notifications, { notify } from 'react-notify-toast';
import { BrowserRouter, Match, Redirect } from 'react-router';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { loggedIn: false };
    this.changeState = this.changeState.bind(this);
    this.logout = this.logout.bind(this);
  }

  changeState() {
    const bool = this.state.loggedIn;
    if (bool) {
      this.setState({ loggedIn: false });
    } else {
      this.setState({ loggedIn: true });
    }
  }

  logout () {
    axios({
      method: 'delete',
      url: '/token',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log('Logged Out!');
      notify.show('Logged Out!', 'success', 3000);
    })
    .catch(err => {
      notify.show(err.response.data, 'error', 3000);
    });
    this.changeState();
  }

  componentWillMount() {
    axios.get('/token')
      .then((res) => this.setState({ loggedIn: res.data }))
      .catch(err => notify.show(err.response.data, 'error', 3000));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="body">
          <Header loggedIn={this.state.loggedIn} logout={this.logout}/>
          <main className="main">
            <Notifications />
            {this.state.loggedIn ? <Profile /> : <MainPage changeState={this.changeState}/>}
          </main>
          <Footer loggedIn={this.state.loggedIn} logout={this.logout}/>
        </div>
      </BrowserRouter>
    );
  }
}
