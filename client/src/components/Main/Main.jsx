import React from "react";
import { Intro } from "./Intro/Intro";
import Projects from "./Projects/Projects";
import About from "./About/AboutContainer";
import styles from './Main.module.scss';

const Main = ({ location, match, projectIsVisible, menuIsVisible, setProjectIsVisible, setMenuIsVisible }) => {
  return (
    <main className={`${projectIsVisible ? styles.projectIsVisible : 'container'} ${menuIsVisible ? styles.menuIsVisible : ''}`}>
      <Intro projectIsVisible={projectIsVisible} setProjectIsVisible={setProjectIsVisible} />
      <Projects location={location} match={match} projectIsVisible={projectIsVisible} setProjectIsVisible={setProjectIsVisible} />
      <About projectIsVisible={projectIsVisible} setProjectIsVisible={setProjectIsVisible} />
      <div className={styles.menuTab} onClick={() => setMenuIsVisible(!menuIsVisible)}>
        <i className="fa fa-bars"></i>
      </div>
    </main>
  );
};

export default Main;
