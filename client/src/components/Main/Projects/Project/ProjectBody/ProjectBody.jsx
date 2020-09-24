import React from "react";
import styles from './ProjectBody.module.scss';

const ProjectBody = ({ challenge, solution, projectKey, title }) => {
    console.log(<img src={`/images/${projectKey}-body-1.png`} alt={`${title} snapshot 2`} />);
    console.log(<img src={`/images/${projectKey}-body-2.png`} alt={`${title} snapshot 2`} />);
    return (
        <article className={styles.projectBody}>
            <section className={styles.projectBody_copy}>
                <div>
                    <p>{challenge}</p>
                </div>
                <div>
                    <p>{solution}</p>
                </div>
            </section>
            <section className={styles.projectBody_img}>
                <img src={`/images/${projectKey}-body-1.png`} alt={`${title} snapshot 1`} />
                <img src={`/images/${projectKey}-body-2.png`} alt={`${title} snapshot 2`} />
            </section>
        </article>
    )
};

export default ProjectBody;