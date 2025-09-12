import React from "react";

import styles from "./About.module.css";
import aboutImage from "../../../assets/about/aboutImage.png"
import cursorIcon from "../../../assets/about/cursorIcon.png"
import serverIcon from "../../../assets/about/serverIcon.png"

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={aboutImage}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={cursorIcon} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm a frontend developer passionate about creating responsive and optimized websites.
                                I focus on building user-friendly interfaces and bringing designs to life with clean, efficient code.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={serverIcon} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I specialize in developing fast and optimized backend systems and APIs, ensuring reliability,
                                scalability, and seamless integration with frontend applications.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};