import React from 'react';
import Sidebar from './components/Sidebar'
import Introduction from './components/Introduction'
import About from './components/About'
import Timeline from './components/Timeline'

export default function App() {
  return (
    <div id="colorlib-page" className="App">
      <div id="container-wrap">
        <Sidebar/>
        <div id="colorlib-main">
          <Introduction/>
          <About/>
          <Timeline/>
        </div>
      </div>
    </div>
  );
}
