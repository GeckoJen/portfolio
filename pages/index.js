
import { Button } from 'antd';
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Navbar from '../src/components/Navbar';


export default function Home() {

  return (
    <body>
      <Navbar />
      <div className={styles.image}>
        <div className={styles.text}>
          <h1>Jenny Taylor</h1>
          <h2>software developer</h2>
          <Link href="/about">
            <Button shape="round" block className={styles.button}>
              about me
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button shape="round" block className={styles.button}>
              portfolio
            </Button>
          </Link>
          <a
            href="https://www.linkedin.com/in/jenny-taylor-2b199b224"
            target="_blank" rel="noreferrer"
          >
            <Button shape="round" block className={styles.button}>
              follow me
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                className={styles.icons}
              />
              {/* <img
                src="https://www.clipartmax.com/png/middle/160-1600742_github-icon.png"
                className={styles.icons}
              /> */}
            </Button>
          </a>

          {/* <Link href="/history">
            <Button shape="round" block className={styles.button}>
              education and work history
            </Button>
          </Link> */}
        </div>
      </div>
    </body>
  );
}


