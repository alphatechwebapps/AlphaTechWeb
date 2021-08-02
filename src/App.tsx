import React from 'react';

import './App.css';
import DocumentMeta from 'react-document-meta';



import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {


  const meta = {
    title: 'AlphaTech',
    description: '>Development of systems, sites and applications web/mobile.',
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
        <Header />

        <Content />

        <Footer />


      </header>
    </div>
  );
}

export default App;
