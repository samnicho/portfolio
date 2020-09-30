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
      <h3>
        {
          !loading && (
            bio[0]
          )
        }
        <a href="/files/Sam Nicholson CV | samnicho@gmail.com.pdf" download>
          <i className="fa fa-arrow-circle-down"></i>
          download my CV
        </a>
      </h3>
      <Footer />
    </section>
  );
};

export default About;
