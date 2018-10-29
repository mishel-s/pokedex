import React, { Component } from 'react';
import Logo from './components/common/header/logo.js';
import FiltersPanel from './containers/filtersPanel';
import TagsPanel from "./containers/tagsPanel";
import Content from "./containers/content";
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Logo />
            <FiltersPanel />
            <TagsPanel />
            <Content/>
        </div>
    );
  }
}

export default App;
