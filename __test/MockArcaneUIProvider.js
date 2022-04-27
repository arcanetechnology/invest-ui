import { ArcaneUIProvider } from '@arcanetechnology/react-ui-lib';
import AppPortal from 'components/AppPortal';

/**
 * Mocks the ArcaneUIProvider for test purposes.
 */
export default function MockArcaneUIProvider({ children }) {
  return (
    <ArcaneUIProvider LinkComponent={LinkComponent} PortalComponent={AppPortal}>
      {children}
    </ArcaneUIProvider>
  );
}

const LinkComponent = ({ ...props }) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  <a {...props} />
);
