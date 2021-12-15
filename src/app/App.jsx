import React from 'react';
import '../assets/styles/app.scss';
import Home from './home/index';
import Contacts from './contacts/index';
import Finances from './finances/index';
import Tasks from './tasks/index';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentApp: 'home',
      prevApp: 'home',
      page: <Home appChanger={this.changeApp}/>
    }

    this.changeApp = this.changeApp.bind(this);
  }

  changeApp = (appName) => {

    let page;
    switch(appName) {
      case 'home':
        page = <Home appChanger={this.changeApp}/>;
        break;
      case 'contacts':
        page = <Contacts appChanger={this.changeApp}/>
        break;
      case 'finances':
        page = <Finances appChanger={this.changeApp}/>
        break;
      case 'tasks':
        page = <Tasks appChanger={this.changeApp}/>
        break;
      default:
        page = <Home appChanger={this.changeApp}/>
    }

    this.setState((state, props) => {

      return {
        prevApp: state.currentApp,
        currentApp: appName,
        page: page
      }

    });

  }

  render() {
    return (
      <div className="App">
        <Header clickHandler={this.changeApp} />
        {this.state.page}
      </div>
    );
  }
}

export default App;