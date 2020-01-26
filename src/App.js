import React from 'react';
import Sidebar from './components/Sidebar'
import Introduction from './components/Introduction'
import Insurances from './components/Insurances'
import Contact from './components/Contact'
import Partners from './components/Partners'
import styles from './App.css';
import About from "./components/About";

export default function App() {
  return (
    <div className={styles.app}>
      <div id="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          <Introduction />
          <About />
          <Partners />
          <Insurances />
          <Contact />
        </div>
      </div>
    </div>
  );
}
