import React from 'react';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Inside App.js</h1>
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
    </div>
  );
}

export default App;
