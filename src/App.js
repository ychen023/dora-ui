import React from 'react';
import DoraCard from './Card';
import Header from './Header';

export default function App(props) {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <DoraCard darayaki={props.doraData}/>
      </main>
    </div>
  );
}

