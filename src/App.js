import React from "react";
import styles from "./App.module.css";
import Navbar from './components/navbar';
import Fold from './components/fold';


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Fold />
    </div>
  );
}

export default App;
