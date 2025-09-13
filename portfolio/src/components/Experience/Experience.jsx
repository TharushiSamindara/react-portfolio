import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import avonetLogo from "../../../assets/history/avonetLogo.png"

const images = import.meta.glob("../../../assets/skills/*", {
    eager: true,
    import: "default",
});

export const getImageUrl = (fileName) => {
    const key = Object.keys(images).find((k) => k.endsWith(fileName));
    return key ? images[key] : "";
};


export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <img
                                    src={avonetLogo}
                                    alt={`${historyItem.organisation} Logo`}
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul className={styles.historyList}>
                                        {historyItem.experiences.map(([key, value], id) => (
                                            <li key={id}>
                                                {key} : {Array.isArray(value) ? "" : <p>&nbsp;&nbsp;&nbsp;&nbsp;{value}</p>}
                                                {Array.isArray(value) && (
                                                    <ul className={styles.nestedList}>
                                                        {value.map((item, subId) => (
                                                            <li key={subId}><p>{item}</p></li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};