export const ROUTES = {
  home: '/',
  media: '/media/[q]',
  weather: '/weather/[q]',
  people: '/people/[q]',
};

export const TITLES = {
  media: 'Search for Media',
  weather: 'Search for Weather',
  people: 'Search for People',
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

export const LINK_LABELS = {
  searchResults: 'Search Results',
  backToSearchResults: 'Back to Search Results',
};

export const PROPS = {
  label: 'label',
  value: 'value',
  icon: 'icon',
  title: 'title',
  button: 'button',
  dataRow: 'data-row',
  cardTitle: 'card-title',
};

export const DATE_FORMAT = {
  date: 'MM/DD/YYYY',
};

export const PLACEHOLDERS = {
  searchInput: 'Enter a search value',
};

export const STRINGS = {
  search: 'search',
  noResultsFound: 'No results found.',
};
