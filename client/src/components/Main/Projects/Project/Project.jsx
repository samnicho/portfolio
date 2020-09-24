import React from "react";
import ProjectBody from './ProjectBody/ProjectBody';
import ProjectHeader from './ProjectHeader/ProjectHeader';
import Footer from '../../Footer/FooterContainer';
import styles from './Project.module.scss';

const Project = ({ projectDetails, pageTransition, loading }) => {
  return (
    <div className={`${styles.projectWrapper} ${loading ? '' : styles.projectWrapper_loaded}`}>
      {
        !loading && (
          <div className={styles.projectWrapper_inner} id="projectWrapper">
            <ProjectHeader
              projectKey={projectDetails.key}
              title={projectDetails.title}
              type={projectDetails.type}
              role={projectDetails.content.details.role}
              tools={projectDetails.content.details.tools}
              url={projectDetails.content.details.url}
              company={projectDetails.content.details.company}
              pageTransition={pageTransition}
            />
            <ProjectBody
              projectKey={projectDetails.key}
              title={projectDetails.title}
              challenge={projectDetails.content.body.challenge}
              solution={projectDetails.content.body.solution}
              team={projectDetails.content.details.team}
              pageTransition={pageTransition}
            />
            <Footer />
          </div>
        )
      }
    </div>

  );
};

export default Project;