import React from 'react';
import { Link } from "react-router-dom";
import styles from './ProjectsMenu.module.scss';

const ProjectsContainer = ({ projects, projectIsVisible, loading }) => {
    return (
        <div className={`${styles.projectsMenu} ${projectIsVisible ? styles.projectsMenu__mini : ''}`}>
            {
                loading ? (
                    <div>loading...</div>
                )
                    :
                    (
                        <React.Fragment>
                            {
                                projects.map((project, i) => {
                                    return (
                                        <Link className={styles.projectTile} to={`/${project.key}`} key={i}>
                                             <img className={styles.image} src={`/images/${project.key}-header-bg.png`} alt={`${project.title} header background`} />
                                            <div className={styles.text}>
                                                <h3 className={styles.title}>
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </React.Fragment>
                    )
            }
        </div>
    )
}

export default ProjectsContainer;