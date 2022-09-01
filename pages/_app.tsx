import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';
config.autoAddCss = false;

/**
 * Overrides the default Next app component
 *
 * @param {NextComponentType<NextPageContext, any, P>} Component
 * @param {Object} pageProps
 * @returns a app component
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
