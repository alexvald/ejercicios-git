//dependencia
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//asstes
import './Global/css/App.css';
//componentes
import Header from './Global/Header'
import Body from './Global/Body'
import Footer from './Global/Footer'
//Data
import items from '../data/menu'

class App extends Component {
  static propTypes ={
    children: PropTypes.object.isRequired
  }
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Header title='Hola mucho gusto' items={items} />
        <Body contenido={ children }/>
        <Footer copyright="&copy: Devf 2018"/>
      </div>
    );
  }
}

export default App;
