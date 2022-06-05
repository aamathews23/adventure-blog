import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import styles from '../../styles/components/layout/page.module.scss';

// Import components
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';

type PageType = {
  title?: string;
  description?: string;
  previewImg?: string;
  children?: ReactNode;
};

/**
 * Creates and configures a page component for the Next app.
 *
 * @param {String} title the page title
 * @param {String} description the page description
 * @param {String} previewImg the social media preview image of the page
 * @param {ReactNode} children a list of react children
 * @returns A page component
 */
const Page: NextPage<PageType> = ({
  title,
  description,
  previewImg,
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
        {previewImg && (
          <>
            <meta
              property="og:image"
              content={previewImg}
            />
            <meta
              property="twitter:image"
              content={previewImg}
            />
          </>
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
