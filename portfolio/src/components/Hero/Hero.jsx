import React from "react";

import styles from "./Hero.module.css";
import heroImage from "../../../assets/hero/heroImage.png";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Tharushi Samindara</h1>
                <p className={styles.description}>
                    I am a Software Engineer with 1 year of experience in full-stack development,
                    skilled in SpringBoot, Java, Next.js, Nest.js, JavaScript, TypeScript, React, and AWS.
                    I enjoy building user-friendly applications and delivering efficient, scalable
                    solutions while continuously learning new technologies.
                </p>
                <a href="mailto:tharushisamindara@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={heroImage}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};