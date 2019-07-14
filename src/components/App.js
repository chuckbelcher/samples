import React from 'react';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import './App.css';
//import Home from './Home/Home';
import Todo from './Todo/Todo';
import Timer from './Timer/Timer'

function App() {
  return (
    <div className="App">
      <Header title="Welcome APPBK80" />
      <Timer />
      {/* <Home /> */}
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
