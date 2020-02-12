import React, { Component } from 'react';
import Page1 from './Page1'
// import Page2 from './Page2'
// import Page3 from './Page3'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'page1',
      component: ''
    }
  }

  onRouteChange = (route) => {
      // without codesplitting:
    // this.setState({route: route})
    // with codesplitting
    if (this.state.route === 'page1'){
      this.setState({route})
    } else if (this.state.route === 'page2') {
      import('./Page2').then((Page2) => {
        console.log(Page2);
        this.setState({route: route, component: Page2.default})
      })
    } else if (this.state.route === 'page3') {
      import('./Page3').then((Page3) => {
        this.setState({route: route, component: Page3.default})
      })
    }
  };

  render() {
    // if (this.state.route === 'page1'){
    //     //   return <Page1 onRouteChange={this.onRouteChange}/>
    //     // } else if (this.state.route === 'page2') {
    //     //  return <Page2 onRouteChange={this.onRouteChange}/>
    //     // } else if (this.state.route === 'page3') {
    //     //   return <Page3 onRouteChange={this.onRouteChange}/>
    //     // }

    if (this.state.route === 'page1'){
      return <Page1 onRouteChange={this.onRouteChange}/>
    } else {
      return <this.state.component onRouteChange={this.onRouteChange}/>
    }
  }
}

export default App;
