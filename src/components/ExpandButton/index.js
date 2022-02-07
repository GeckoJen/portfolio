import React from 'react';
import { Button } from 'antd';
import styles from '../../../styles/ExpandButton.module.css';

function ExpandButton({text,  onClick}) {
    return (
      <div>
        <Button shape="round" className={styles.expandButton} onClick={onClick}>
          {text}
        </Button>
      </div>
    );
}

export default ExpandButton;
