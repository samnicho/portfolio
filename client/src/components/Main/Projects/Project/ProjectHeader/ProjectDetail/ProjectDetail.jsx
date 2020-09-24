import React from "react";
import styles from './ProjectDetail.module.scss';

const ProjectDetail = ({ label, detail, url }) => {
    const detailText = typeof(detail) === 'object' ? detail.join(', ') : detail;

    return (
        <div className={styles.projectHeader_detailWrapper}>
            <div className={styles.projectHeader_detailLabel}>
                <h3>
                    {label}
                </h3>
            </div>
            <div className={styles.projectHeader_detail}>
                {
                    url ? (
                        <a href={url}>{detail}</a>
                    ) :
                        (
                            <p>{detailText}</p>
                        )
                }
            </div>
        </div>
    );
};

export default ProjectDetail;