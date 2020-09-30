import React from "react";
import styles from './ProjectBody.module.scss';

const ProjectBody = ({ challenge, solution, projectKey, title }) => {
    return (
        <article className={styles.projectBody}>
            <section className={styles.projectBody_copy}>
                <div>
                    <p>The challenge:</p>
                    <p>{challenge}</p>
                </div>
                <div>
                    <p>The solution:</p>
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