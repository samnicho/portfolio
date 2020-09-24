import React from "react";
import styles from './Contact.module.scss';

const Contact = ({ gmail, mobile, linkedin }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_contact}>
        {
          mobile.length > 0 && (
            <a href={`tel:${mobile}`} rel="noopener noreferrer">
              <i class="fa fa-phone"></i>
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
              <i class="fa fa-linkedin"></i>
            </a>
          )
        }
      </div>
    </footer>
  );
};

export default Contact;
