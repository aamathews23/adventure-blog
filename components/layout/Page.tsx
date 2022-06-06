import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import styles from '../../styles/components/layout/page.module.scss';

// Import components
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';

// Import types
import HeaderType from '../../types/Header';
import FooterType from '../../types/Footer';

type PageType = {
  title: string;
  description: string;
  header: HeaderType;
  footer: FooterType;
  previewImg?: string;
  children?: ReactNode;
};

/**
 * Creates and configures a page component for the Next app.
 *
 * @param {String} title the page title
 * @param {String} description the page description
 * @param {HeaderType} header the page header
 * @param {FooterType} footer the page footer
 * @param {String} previewImg the social media preview image of the page
 * @param {ReactNode} children a list of react children
 * @returns A page component
 */
const Page: NextPage<PageType> = ({
  title,
  description,
  header,
  footer,
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
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
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
        title={header.title}
        to={header.to}
        body={header.body}
      />
      {children && (
        <main
          className={styles[`${mainClass}__body`]}
          data-testid="page-body"
        >
          {children}
        </main>
      )}
      <Footer
        copyright={footer.copyright}
        linkedinUrl={footer.linkedinUrl}
        githubUrl={footer.githubUrl}
      />
    </div>
  );
};

export default Page;
