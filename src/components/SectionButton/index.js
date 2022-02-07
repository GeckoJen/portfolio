import React from 'react';
import { Card } from 'antd';
import styles from '../../../styles/SectionButton.module.css'

function SectionButton({title}) {
    return (
      
          <div className={styles.card}>
          <h2>{title}</h2>
           
        </div>
     
    );
}

export default SectionButton;
