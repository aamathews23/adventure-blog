import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import styles from '../../styles/components/layout/page.module.scss';
import Footer from '../navigation/Footer';

// Import components
import Header from '../navigation/Header';

type PageType = {
  title?: string;
  description?: string;
  ogImg?: string;
  twitterImg?: string;
  children?: ReactNode;
};

/**
 * Creates and configures a page component for the Next app.
 *
 * @param {String} title the page title
 * @param {String} description the page description
 * @param {String} ogImg the og image of the page
 * @param {String} twitterImg the twitter image of the page
 * @param {ReactNode} children a list of react children
 * @returns A page component
 */
const Page: NextPage<PageType> = ({
  title,
  description,
  ogImg,
  twitterImg,
  children,
}: PageType) => {
  const mainClass = 'page';
  return (
    <div
      className={styles[mainClass]}
      data-testid="page"
    >
      <Head>
        {title && <title>{title}</title>}
        {description && (
          <meta
            name="description"
            content={description}
          />
        )}
        {ogImg && (
          <meta
            property="og:image"
            content={ogImg}
          />
        )}
        {twitterImg && (
          <meta
            property="twitter:image"
            content={twitterImg}
          />
        )}
      </Head>
      <Header
        title="Aaron&rsquo;s Adventures"
        to="/"
      />
      {children && (
        <main
          className={styles[`${mainClass}__body`]}
          data-testid="page-body"
        >
          {children}
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Page;
