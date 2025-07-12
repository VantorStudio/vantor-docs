import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
         <img 
          src="./img/VantorStudiosLogo.png" 
          alt="Vantor Studios Logo" 
          style={{ width: '60px', height: 'auto', marginBottom: '1rem' }} 
        />
        <Heading as="h1" className="hero__title">
          Vantor Docs
        </Heading>
        <p className="hero__subtitle">The Vantor Engine Documentation Reference</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started 💫
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The Vantor Engine API Reference">
      <HomepageHeader />
    </Layout>
  );
}
