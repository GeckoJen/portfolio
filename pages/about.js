import React from "react";

import Navbar from "../src/components/Navbar";
import HeaderTitle from "../src/components/HeaderTitle";
import SectionButton from "../src/components/SectionButton";
import styles from "../styles/About.module.css";

function About() {


    return (
      <div className="body">
        <Navbar />
        <HeaderTitle title="about me" />
        <div className={styles.textBlock}>
          <SectionButton title="overview" />
          <p>
            After a rewarding career as an asset finance solicitor,
            circumstances led to me taking a break and for the last 7 years I
            have pursued a couple of self-employment ventures, one as a textile
            artist and the other designing online escape rooms. I taught myself
            to build a website from scratch for my escape room business, and I
            loved it so much I'm now looking to begin a new career in tech as a
            software developer. I am currently undertaking a coding bootcamp
            course from The School of Code.
          </p>
          <SectionButton title="coding skills" />
          <div className={styles.sectionDiv}>
            <p>
              {" "}
              I have experience with both the front-end and back-end of app
              development. I am familiar with HTML, CSS, JavaScript and React on
              the front-end, and am currently learning Next.js (which I am using
              for this site). On the back-end, I am familiar with Node.js,
              setting up Express servers and connecting to Postgres databases,
              and creating RESTful API routes to access the data. I have used a
              See my portfolio for more examples of projects I've made.
            </p>
            <div className={styles.codingImage}></div>
          </div>
          <SectionButton title="personal" />
          <div className={styles.sectionDiv}>
            <div className={styles.personalImage}></div>
            <p>
              {" "}
              I live in Manchester with my husband, two children, a dog and an
              extensive gin collection. When I'm not coding or running my small
              businesses, I enjoy learning Spanish, playing games and learning
              new creative skills such as lino-cutting.
            </p>
          </div>
        </div>
      </div>
    );
}

export default About;
