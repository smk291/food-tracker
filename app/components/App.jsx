import React from 'react';
import axios from 'axios';
import MainPage from './MainPage';
import Profile from './Profile';
import Footer from './Footer';
import { BrowserRouter, Match, Redirect } from 'react-router';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { loggedIn: false };
    this.changeState = this.changeState.bind(this);
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
    })
    .catch((err) => {
      console.error(err);
    })
    this.changeState();
  }

  componentWillMount() {
    axios.get('/token')
      .then((res) => this.setState({ loggedIn: res.data }))
      .catch((err) => console.error(err.message));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="body">
          <main className="main">
            {this.state.loggedIn ? <Redirect to="/profile" /> : <MainPage changeState={this.changeState}/>}
            <Match pattern="/profile" component={Profile}/>
          </main>
          <Footer loggedIn={this.state.loggedIn} logout={this.logout}/>
        </div>
      </BrowserRouter>
    );
  }
}
