import React from "react";
import { Card } from "antd";
import styles from "../styles/History.module.css";
import Navbar from "../src/components/Navbar";
import HeaderTitle from "../src/components/HeaderTitle";
import SectionButton from "../src/components/SectionButton";

function History() {
  return (
    <body>
      <Navbar />
      <HeaderTitle title="education &" title2="work history" />

      <div className={styles.textBlock}>
        <SectionButton title="work history" />
        <div className={styles.block}>
          <Card className={styles.card} title="Gecko Escape Rooms">
            <p>
              Business owner<br></br>2021-present
            </p>
          </Card>
          <h3>
            I design and create virtual escape rooms, devising a range of
            different types of puzzles (which need to be interesting and tricky
            but not impossible), as well as coming up with a storyline upon
            which everything hangs together. I began by using Google Forms to
            easily and simply share my escape rooms with others online, and have
            since made my own{" "}
            <a href="https://geckoescaperooms.com" target="_blank">
              website
            </a>
            .
          </h3>
        </div>

        <div className={styles.block}>
          <Card className={styles.card} title="Gecko Fabric Art">
            <p>
              Business owner<br></br>2015-present
            </p>
          </Card>
          <h3>
            I create fabric artworks and homewares (for example wall art,
            cushions and table mats), primarily using appliqué and quilting
            techniques. I am responsible for the entire lifecycle of product,
            from the initial design concept to delivery of the item to the
            customer, as well as dealing with all the necessary administrative,
            promotion, marketing, networking and accounting matters that come
            with running your own business.
          </h3>
        </div>

        <div className={styles.block}>
          <Card className={styles.card} title="Lloyds Banking Group">
            <p>
              In-house lawyer<br></br>2013-2015
            </p>
          </Card>
          <h3>
            I was part of the in-house legal team looking after the Lex
            Autolease vehicle hire business. My responsibilities included
            negotiating vehicle hire agreements with a variety of customers,
            advising the business of the legal implications of various
            contractual and regulatory matters, and providing training for the
            business on contract documentation.
          </h3>
        </div>
        <div className={styles.block}>
          <Card className={styles.card} title="Addleshaw Goddard LLP">
            <p>
              Associate solicitor<br></br>2005-2013
            </p>
          </Card>
          <h3>
            As an associate solicitor in the Asset Finance team, I reviewed
            contracts to determine their suitability and I drafted and
            negotiated lease and security documentation for a variety of asset
            funding structures. I was responsible for supervising and training
            the team's trainee solicitors, and I was the team's designated
            Consumer Credit Act expert, kept up to date with legislation and
            regulatory changes and updated the team on the new information.
          </h3>
        </div>

        <SectionButton title="education" />
        <div className={styles.block}>
          <Card className={styles.card} title="A-levels">
            <p>
              The Kings School, Tynemouth<br></br>1998-2000
            </p>
          </Card>
          <h3>Maths: A, Further Maths: B, Physics: A, Music: A</h3>
        </div>
        <div className={styles.block}>
          <Card className={styles.card} title="Degree">
            <p>
              UMIST<br></br>2000-2003
            </p>
          </Card>
          <h3>Mathematics and Management: 2:1 BSc Hons</h3>
        </div>
        <div className={styles.block}>
          <Card className={styles.card} title="Post-graduate">
            <p>
              Manchester Metropolitan University<br></br>2004-2005
            </p>
          </Card>
          <h3>
            Postgraduate Diploma in Law: Commendation
            <br />
            Legal Practice Course: Distinction
          </h3>
        </div>
        <div className={styles.block}>
          <Card className={styles.card} title="Further study">
            <p>
              School of Code<br></br>2021-2022
            </p>
          </Card>
          <h3>Coding bootcamp</h3>
        </div>
      </div>
    </body>
  );
}

export default History;
