import { Button, FeatureList, PageHero, PageSectionWrapper } from '@arcanetechnology/react-ui-lib';
import styles from './index.module.scss';

/**
 * Represents the Invest page layout.
 *
 */
export default function InvestLayout() {
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
                  text: 'Contact Us'
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
            <Button arrowRight small>{button.text}</Button>
          )}
        />
      </PageSectionWrapper>
    </div>
  );
}
