import React from 'react';
import styles from '../../../styles/HeaderTitle.module.css'

function HeaderTitle({title, title2=''}) {
  return (
    <div className={styles.headerImage}>
          <h1>{title}</h1>
          <h1 id={styles.line2}>{title2}</h1>
    </div>
  );
}

export default HeaderTitle;
