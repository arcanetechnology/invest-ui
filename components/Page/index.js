import { CookiePopupWithStorage, Footer, NextGoogleAnalytics, PageBackground, ScrollOutProvider, TopBar } from '@arcanetechnology/react-ui-lib';
import styles from './index.module.scss';

/**
 * Represents a page with a TopBar, Footer, Cookie Popup (if needed).
 */
export default function Page({ children }) {
  return (
    <PageBackground className={styles.page}>
      <TopBar
        homeUrl={`${process.env.NEXT_PUBLIC_ORIGIN}`}
        origin={process.env.NEXT_PUBLIC_ORIGIN}
        activeItem="Invest"
      />

      <div className={styles.main}>
        <ScrollOutProvider>
          {children}
        </ScrollOutProvider>
      </div>

      <Footer
        homeUrl={`${process.env.NEXT_PUBLIC_ORIGIN}`}
        origin={process.env.NEXT_PUBLIC_ORIGIN}
        activeLink={Footer.LINKS.INVEST}
      />

      <CookiePopupWithStorage
        firebaseMeasurementId={process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}
        GoogleAnalyticsComponent={NextGoogleAnalytics}
      />
    </PageBackground>
  );
}
