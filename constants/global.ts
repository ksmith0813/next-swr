export const ROUTES = {
  home: '/',
  search: '/search/[q]',
};

export const PHONE_TYPE = {
  home: 'home',
  mobile: 'mobile',
  office: 'office',
};

export const MASKS = {
  phone: '999-999-9999',
};

export const REGEX = {
  numbers: /\D/g,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]([0-9]{4})$/,
};

export const SEARCH_LABELS = {
  results: 'You searched for:',
  relatedAccounts: 'Accounts for:',
};

export const LINK_LABELS = {
  signIn: 'Sign In',
  signOut: 'Sign Out',
  searchResults: 'Search Results',
  backToHistory: 'Back to History',
  backToSearchResults: 'Back to Search Results',
  relatedAccounts: 'Related Accounts',
};

export const PROPS = {
  label: 'label',
  value: 'value',
  icon: 'icon',
  title: 'title',
  button: 'button',
  dataRow: 'data-row',
  customerInfo: 'customer-info',
  contactInfo: 'contact-info',
  otherContact: 'other-contact',
  cardTitle: 'card-title',
};

export const DATE_FORMAT = {
  date: 'MM/DD/YYYY',
};

export const PLACEHOLDERS = {
  searchInput: 'Enter a search value',
};

export const STRINGS = {
  noResultsFound: 'No results found.',
  notAvailable: 'N/A',
  noSearchEntry: `Enter one or more search parameters to find results.`,
};
