import React from 'react';
import { Route } from "react-router-dom";
import Project from './Project/ProjectContainer';
import ProjectsMenu from './ProjectsMenu/ProjectsMenuContainer';
import styles from './Projects.module.scss';

const Projects = ({ setProjectIsVisible, projectIsVisible }) => {
    return (
        <section id="projects" className={`${styles.projects} ${projectIsVisible ? styles.projectIsVisible : ''}`}>
            <ProjectsMenu projectIsVisible={projectIsVisible} />
            <Route path="/:project" render={(props) => <Project {...props} setProjectIsVisible={setProjectIsVisible} />} />
        </section>
    )
}

export default Projects;