import React from "react";

import styles from "./ProjectCard.module.css";
import spendsmart from "../../../assets/projects/spendsmart.png"
import mooddiary from "../../../assets/projects/mooddiary.png"
import stockguard from "../../../assets/projects/stockguard.png"
import clientkeeper from "../../../assets/projects/clientkeeper.png"

const projectIcons = [spendsmart, clientkeeper,mooddiary,stockguard];
export const getImageIcon = (path) => {
    for (let i = 0; i < projectIcons.length; i++) {
        if(projectIcons[i] === "/assets/"+path) {
            return projectIcons[i]
        }
    }
};

export const ProjectCard = ({
                                project: { title, imageSrc, description, skills, demo, source },
                            }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img
                    src={getImageIcon(imageSrc)}
                    alt={`Image of ${title}`}
                    className={styles.image}
                />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    );
                })}
            </ul>
            <div className={styles.links}>
                {/*<a href={demo} className={styles.link}>
                Demo
                </a>*/}
                <a href={source} className={styles.link}>
                    Source
                </a>
            </div>
        </div>
    );
};