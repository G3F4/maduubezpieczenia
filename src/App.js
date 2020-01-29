import React from 'react';
import Sidebar from './components/Sidebar'
import Introduction from './components/Introduction'
import Insurances from './components/Insurances'
import Contact from './components/Contact'
import Partners from './components/Partners'
import styles from './App.css';
import About from "./components/About";
import Work from "./components/Work";

export default function App() {
  return (
    <div className={styles.app}>
      <div id="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          <Introduction />
          <About />
          <Partners />
          <Work />
          <Insurances />
          <Contact />
        </div>
      </div>
    </div>
  );
}
