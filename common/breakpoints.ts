/**
 * The breakpoints used in the application
 */
const queries = [768, 1024].map((bp) => `@media (min-width: ${bp}px)`);

const breakpoints = {
  sm: queries[0],
  lg: queries[1],
};

export default breakpoints;
