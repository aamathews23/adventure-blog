import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/navigation/Header';
import Footer from '@/navigation/Footer';
import breakpoints from '@/common/breakpoints';

type PageProps = {
  title: string;
  description: string;
  previewImg?: string;
  children?: React.ReactNode;
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
const Page: NextPage<PageProps> = ({
  title,
  description,
  previewImg,
  children,
}: PageProps) => (
  <div
    css={{
      padding: 16,
      width: '100%',
      maxWidth: 1440,
      margin: 'auto',
      [breakpoints.lg]: { padding: 32 },
    }}
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
    <Header />
    {children && (
      <main
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          minHeight: 'calc(100vh - 144px - 32px)',
          [breakpoints.sm]: {
            minHeight: 'calc(100vh - 112px - 32px)',
          },
          [breakpoints.lg]: {
            minHeight: 'calc(100vh - 128px - 64px)',
          },
        }}
        data-testid="page-body"
      >
        {children}
      </main>
    )}
    <Footer />
  </div>
);

export default Page;
