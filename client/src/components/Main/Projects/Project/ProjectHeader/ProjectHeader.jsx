import React from "react";
import ProjectDetail from './ProjectDetail/ProjectDetail';
import styles from './ProjectHeader.module.scss';

const ProjectHeader = ({ projectKey, title, type, role, tools, url, company, setPage, pageTransition }) => {
    return (
        <section className={`${styles.projectHeader} ${pageTransition ? styles.pageTransition : ''}`}>
            <header className={styles.projectHeader_header}>
                <img className={styles.projectHeader_headerImg} src={`/images/${projectKey}-header-bg.png`} alt={`${title} header background`} />
                <div className={styles.projectHeader_headerTitle}>
                    <h1>
                        {title}
                    </h1>
                    {
                        (type || role) && (
                            <h3>
                                {
                                    role && (
                                        role
                                    )
                                }
                                {
                                    type && (
                                        <span> | {type}</span>
                                    )
                                }
                            </h3>
                        )
                    }
                </div>
            </header>
            <div className={styles.projectHeader_details}>
                <ProjectDetail label={"Tools"} detail={tools} />
                {
                    company && (
                        <ProjectDetail label={"Agency"} detail={company} />
                    )
                }
                {
                    url && (
                        <ProjectDetail label={"Visit site"} detail={title} url={url} />
                    )
                }
            </div>
        </section>
    );
};

export default ProjectHeader;