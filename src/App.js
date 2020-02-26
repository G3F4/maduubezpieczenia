import React, {useState} from 'react';
import Sidebar from './components/Sidebar'
import Introduction from './components/Introduction'
import Insurances from './components/Insurances'
import Contact from './components/Contact'
import Partners from './components/Partners'
import styles from './App.css';
import About from "./components/About";

export const AppContext = React.createContext({
  sidebarVisible: false,
  hideSidebar: () => {},
  showSidebar: () => {},
});

export default function App() {
  const [sidebarVisible, setSidebarVisible]  = useState(false);
  const contextValue = {
    hideSidebar() {
      setSidebarVisible(false);
    },
    showSidebar() {
      setSidebarVisible(true);
    },
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className={styles.app}>
        <div id="container-wrap">
          <Sidebar className={sidebarVisible ? 'showSidebar' : 'hideSidebar'} />
          <div id="colorlib-main">
            <Introduction />
            <About />
            <Insurances />
            <Partners />
            <Contact />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}
