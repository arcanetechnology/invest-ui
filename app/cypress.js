export const isRunningCypress = () => (
  typeof window !== 'undefined' && window.Cypress && sessionStorage.cypress_secret === process.env.NEXT_PUBLIC_CYPRESS_SECRET
);
