import React from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/styles/app.scss';
import NewContact from './contacts/new';
import AppLink from './AppLinks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentApp: 'home',
      prevApp: 'home'
    }
  }
  render() {

    return (
      <div className="App">
        <AppLink appName='contacts' />
        <NewContact />
      </div>
    );
  }
}

export default App;
