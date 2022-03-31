import React from 'react';

import './styles/main.css'
import DocumentMeta from 'react-document-meta';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

/**
 * AlphaTech Web - Main Application: Create the html composed by Header, Content (list of projects) and Footer components
 * @returns the html template 
 */
function App() {

  /**
   * Constant meta defines the info to meta html tag
   */
  const meta = {
    title: 'AlphaTech',
    description: 'Development of systems, sites and applications web/mobile.',
    canonical: 'http://alpha-technology.appspot.com',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'web,develpment,react'
      }
    }
  };

  return (

    <div className="App">
      <DocumentMeta {...meta} />
      <header className="App-header">

        <div id="wrapper">
          <Header />
          <Content />
          <Footer />
        </div>

      </header>
    </div>
  );
}

export default App;
