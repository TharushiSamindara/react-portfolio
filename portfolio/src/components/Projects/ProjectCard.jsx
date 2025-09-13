import React from "react";

import styles from "./ProjectCard.module.css";

const images = import.meta.glob("../../../assets/projects/*", {
    eager: true,
    import: "default",
});

export const getImageIcon = (fileName) => {
    const key = Object.keys(images).find((k) => k.endsWith(fileName));
    return key ? images[key] : "";
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