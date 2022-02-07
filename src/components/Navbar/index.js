import React from 'react';
import Link from 'next/link';
import { Button } from 'antd'
import styles from '../../../styles/Navbar.module.css'

function Navbar() {
    return (
      <div className={styles.Navbar}>
        <Link href="/">
          <Button shape="round" className={styles.button}>
            home
          </Button>
        </Link>
        <Link href="/about">
          <Button shape="round" className={styles.button}>
            about me
          </Button>
        </Link>
        {/* <Link href="/history">
          <Button shape="round" className={styles.button}>
            history
          </Button>
        </Link> */}
        <Link href="/portfolio">
          <Button shape="round" className={styles.button}>
            portfolio
          </Button>
        </Link>
      </div>
    );
}

export default Navbar;
