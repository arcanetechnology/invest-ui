import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@arcanetechnology/react-ui-lib/lib/index.css';
import '@arcanetechnology/react-ui-lib/lib/toggle.css';
import 'styles/globals.css';
import { ArcaneUIProvider, AuthProvider } from '@arcanetechnology/react-ui-lib';
import NextLink from 'components/NextLink';
import initializeFirebase from 'app/initializeFirebase';
import AppPortal from 'components/AppPortal';

initializeFirebase();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }) {
  const { basePath, asPath } = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href={`${basePath}/favicon.png`} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        <meta property="og:type" key="og:type" content="website" />
        <meta property="og:title" key="og:title" content="Invest | Arcane" />
        <meta property="og:description" key="og:description" content="Build generational wealth with our actively managed crypto fund." />
        <meta name="description" content="Build generational wealth with our actively managed crypto fund." />
        <meta property="og:image" key="og:image" content="https://arcane.no/invest/favicon-1232x1232.png" />
        <meta property="og:url" key="og:url" content={`https://arcane.no/invest${asPath}`} />

        <meta property="twitter:card" key="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" key="twitter:site" content="@arcane_crypto" />
        <meta property="og:site_name" key="og:site_name" content="Arcane" />

        <title>Invest | Arcane</title>
      </Head>

      <QueryClientProvider client={queryClient}>
        <ArcaneUIProvider LinkComponent={NextLink} PortalComponent={AppPortal}>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </ArcaneUIProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
