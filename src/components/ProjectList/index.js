import React, {useState} from 'react';
import SectionButton from '../SectionButton';
// import { LinkPreview } from "@dhaiwat10/react-link-preview";
import ExpandButton from '../ExpandButton';
import {Button} from 'antd'
import styles from "../../../styles/Portfolio.module.css";

function ProjectList({ title, description, deploy, github, documentation, date }) {
  
  const [isExpanded, setIsExpanded] = useState(false)
  const [buttonText, setButtonText] = useState("see more")

  let dateString = date.split('T')[0];
  let dateArray = dateString.split('-')
  let month = {
    "01": 'January',
    "02": 'February',
    "03": 'March',
    "04": 'April',
    "05": "May",
    "06": 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  }
  let dateFormatted = `${dateArray[2]} ${month[dateArray[1]]} ${dateArray[0]}`

  function handleClick() {
      setIsExpanded(!isExpanded)
    if (buttonText === "see more") { setButtonText("see less") }
    else {setButtonText("see more")}
  }

    return (
      <div className={styles.textBlock}>
        <SectionButton title={title} />
        {/* <LinkPreview url={deploy} width="40%"/> */}
        <ExpandButton text={buttonText} onClick={handleClick} />
        <p>{description}</p>
     
        {isExpanded && (
          <div>
            <div className={styles.linkButtonDiv}>
              <a href={deploy} target="_blank">
                <Button className={styles.linkButton} shape="round">
                  See the deployed site here
                </Button>
              </a>
              <a href={github} target="_blank">
                <Button className={styles.linkButton} shape="round">
                  See the github repo here
                </Button>
              </a>
            </div>
            <p className={styles.doc}>{documentation}</p>
            <p className={styles.date}>Date completed: {dateFormatted}</p>
          </div>
        )}
      </div>
    );
}

export default ProjectList;
