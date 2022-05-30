import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import styles from '../../styles/components/layout/page.module.scss';

type PageType = {
  title: string;
  description: string;
  children?: ReactNode;
};

/**
 * Creates and configures a page component for the Next app.
 *
 * @param {String} title the page title
 * @param {String} description the page description
 * @param {ReactNode} children a list of react children
 * @returns A page component
 */
const Page: NextPage<PageType> = ({
  title,
  description,
  children,
}: PageType) => {
  const mainClass = 'page';
  return (
    <div className={styles[mainClass]}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      {children && (
        <main className={styles[`${mainClass}__body`]}>{children}</main>
      )}
    </div>
  );
};

export default Page;
