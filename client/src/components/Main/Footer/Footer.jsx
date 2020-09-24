import React from "react";
import styles from './Footer.module.scss';

const Footer = ({ gmail, mobile, linkedin, github }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_contact}>
        {
          mobile.length > 0 && (
            <a href={`tel:${mobile}`} rel="noopener noreferrer">
              <i className="fa fa-phone"></i>
              {mobile}
            </a>
          )
        }
        {
          gmail.length > 0 && (
            <a href={`mailto:${gmail}`} rel="noopener noreferrer">
              <i className="fa fa-at"></i>
              {gmail}
            </a>
          )
        }
      </div>
      <div className={styles.footer_links}>
        {
          linkedin.length > 0 && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          )
        }
        {
          github.length > 0 && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i>
            </a>
          )
        }
      </div>
    </footer>
  );
};

export default Footer;
