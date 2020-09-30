import React from "react";
import { Link } from "react-router-dom";
import styles from './Intro.module.scss';

export const Intro = ({ projectIsVisible, setProjectIsVisible }) => {
  return (
    <header className={`${styles.intro} ${projectIsVisible ? styles.projectIsVisible : ''}`}>
      <div className={styles.intro_logo}>
        <Link to={'/'} onClick={() => setProjectIsVisible(false)}>
          <img src={`/images/sam.jpeg`} alt={`sam logo`} />
        </Link>
      </div>
      <section className={styles.intro_copy}>
        <h1>
          My name's Sam. I'm a developer from London and this is the best place on the whole of the internet to see examples of <a href="#projects"><span>my</span><span> work</span></a> and discover a bit <a href="#about"><span>about</span><span> me</span></a>.
        </h1>
        <div className={styles.intro_note}>
          <h4><span>*</span>This site was built using ReactJS, SASS, Node.js, Express and Mongoose.</h4>
        </div>
      </section>
    </header>
  );
};
