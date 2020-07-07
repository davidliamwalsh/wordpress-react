import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Books from './components/Books'
import BookPage from './components/BookPage'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Books} />
        <Route exact path="/book/:id" component={BookPage} />
      </div>
    </Router>
  );
}

export default App;
