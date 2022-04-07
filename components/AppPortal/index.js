import { useClientSide } from 'hooks';
import ReactDOM from 'react-dom';

/**
 * The primary Portal in the application used to create popups and overlays.
 * https://reactjs.org/docs/portals.html
 *
 * @param {React.Component} children
 */
const AppPortal = ({ children }) => {
  const isClientSide = useClientSide();

  return isClientSide
    ? ReactDOM.createPortal(children, document.querySelector('#__next'))
    : null;
};

export default AppPortal;
