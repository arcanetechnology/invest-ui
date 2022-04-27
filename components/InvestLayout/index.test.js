import MockArcaneUIProvider from '__test/MockArcaneUIProvider';
import { act, render } from '@testing-library/react';
import InvestLayout from './index';

describe('InvestLayout', () => {
  test('renders the component', async () => {
    const component = render(
      <MockArcaneUIProvider>
        <InvestLayout />
      </MockArcaneUIProvider>
    );

    const title = await component.findByText('The fund.');
    expect(title).toBeTruthy();
  });

  test('clicking on the button opens the onboarding popup', async () => {
    const component = render(
      <MockArcaneUIProvider>
        <InvestLayout />
      </MockArcaneUIProvider>
    );

    const button = await component.findByTestId('contact-us-button');
    expect(button).toBeTruthy();

    act(() => {
      button.click();
    });

    act(async () => {
      const title = await component.findByText('Investment Onboarding');
      expect(title).toBeTruthy();
    });
  });
});
