import React from "react";
import { Link } from "react-router-dom";
import styles from './About.module.scss';

const About = ({ projectIsVisible, setProjectIsVisible, loading, bio }) => {
  return (
    <section id="about" className={`${styles.about} ${projectIsVisible ? styles.projectIsVisible : ''}`}>
      <Link to={'/#about'} onClick={() => setProjectIsVisible(false)} className={styles.icon}>
        <i className="fa fa-address-card" />
      </Link>
      <h2>
        {
          !loading && (
            bio[0]
          )
        }
      </h2>
    </section>
  );
};

export default About;
