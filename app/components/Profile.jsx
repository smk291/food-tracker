import React from 'react';
import axios from 'axios';
import { Match, Redirect } from 'react-router';
import ProfileLanding from './ProfileLanding';
import SearchMeals from './SearchMeals';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
    }
  }

  componentDidMount() {
    axios.get('/users')
      .then((res) => {
        const { firstName, lastName } = res.data;
        this.setState({ firstName, lastName })
      })
      .catch((err) => console.error(err))
  }

  render() {
    return (
      <div>
        <Redirect to="/profile" />
        <Match pattern="/profile" render={() => <ProfileLanding firstName={this.state.firstName}/>} />
        <Match pattern="/search" component={SearchMeals} />
      </div>
    );
  }
}
