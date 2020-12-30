import React from "react";
import { Link } from "react-router-dom";
import Footer from '../Footer/FooterContainer';
import styles from './About.module.scss';

const About = ({ projectIsVisible, setProjectIsVisible, loading, bio }) => {
  return (
    <section id="about" className={`${styles.about} ${projectIsVisible ? styles.projectIsVisible : ''}`}>
      <Link to={'/#about'} onClick={() => setProjectIsVisible(false)} className={styles.icon}>
        <i className="fa fa-address-card" />
      </Link>
      <h4>
        {
          !loading && (
            bio[0]
          )
        }
        <a href="/files/Sam Nicholson CV.pdf" download>
          <i className="fa fa-arrow-circle-down"></i>
          download my CV
        </a>
      </h4>
      <Footer />
    </section>
  );
};

export default About;
