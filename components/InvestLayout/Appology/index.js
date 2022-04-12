import { Button, FeatureList, PageSectionWrapper } from '@arcanetechnology/react-ui-lib';
import { useScrollToTop } from 'hooks';

/**
 * Represents the appology screen the user sees if they are not eligible to see the fund info.
 */
export default function Appology() {
  useScrollToTop();

  return (
    <PageSectionWrapper>
      <FeatureList
        noScrollAnimation
        content={{
          itemsCollection: [
            {
              content: 'We unfortunalety can not offer you a spot in our fund right now. Feel free to contact us if you have any question. In the meatime, check our Research Platform.',
              image: {
                url: './invest/the-fund.png'
              },
              button: {
                text: 'Go to Research'
              }
            }
          ]
        }}
        renderButton={(button) => (
          <a href="https://arcane.no/research">
            <Button arrowRight small>{button.text}</Button>
          </a>
        )}
      />
    </PageSectionWrapper>
  );
}
