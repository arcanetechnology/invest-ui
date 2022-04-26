import { Button, FeatureList, PageHero, PageSectionWrapper } from '@arcanetechnology/react-ui-lib';
import { useState } from 'react';
import Appology from './Appology';
import FundInfo from './FundInfo';
import styles from './index.module.scss';
import OnboardingPopup from './OnboardingPopup';

/**
 * Represents the Invest page layout.
 */
export default function InvestLayout() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showFundInfo, setShowFundInfo] = useState(false);
  const [showAppology, setShowAppology] = useState(false);

  if (showFundInfo) {
    return <FundInfo />;
  }

  if (showAppology) {
    return <Appology />;
  }

  return (
    <div className={styles.investLayout}>
      <PageSectionWrapper>
        <PageHero title="Build generational wealth with our actively managed crypto fund." />
      </PageSectionWrapper>

      <PageSectionWrapper>
        <FeatureList
          content={{
            itemsCollection: [
              {
                title: 'The fund.',
                content: 'Get managed exposure to cryptocurrencies as an asset class.',
                image: {
                  url: './invest/the-fund.png'
                },
                button: {
                  text: 'Contact Us',
                  testid: 'contact-us-button'
                }
              },
              {
                title: 'The CIO.',
                content: 'Let Eric Wall and his highly experienced team manage your exposure for you.',
                image: {
                  url: './invest/Eric.png'
                },
                button: {
                  text: 'Learn More'
                }
              }
            ]
          }}
          renderButton={(button) => (
            <Button
              arrowRight
              small
              onClick={() => { setShowOnboarding(true); }}
              data-testid={button.testid}
            >
              {button.text}
            </Button>
          )}
        />
      </PageSectionWrapper>

      <OnboardingPopup
        isOpen={showOnboarding}
        onClose={() => { setShowOnboarding(false); }}
        onShowAppology={() => { setShowAppology(true); setShowOnboarding(false); }}
        onShowFundInfo={() => { setShowFundInfo(true); setShowOnboarding(false); }}
      />
    </div>
  );
}
