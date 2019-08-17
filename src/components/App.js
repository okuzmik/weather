import React from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <header className="App-header">
          <div className="header-container">
            <p>
            This is the "Family weather guide" weather app! You can search from 200,000 cities! The maximum number of queries per minute is 60.
            </p>
            </div>
        </header>
        <section>
          <Form/>
          <Result/>
        </section>
      </main>
    </div>
  );
}

export default App;
