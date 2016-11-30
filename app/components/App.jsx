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
            {this.state.loggedIn ? <Redirect to="/profile" /> : <MainPage />}
            <Match pattern="/profile" component={Profile}/>
          </main>
          <Footer loggedIn={this.state.loggedIn}/>
        </div>
      </BrowserRouter>
    );
  }
}
