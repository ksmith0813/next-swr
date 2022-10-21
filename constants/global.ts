export const ROUTES = {
  home: '/',
  media: '/media',
  mediaSearch: '/media/[q]',
  mediaDetail: '/media/[q]/[id]',
  weather: '/weather',
  weatherSearch: '/weather/[q]',
  people: '/people',
  peopleDetail: '/people/[q]',
};

export const TITLES = {
  media: 'Search for Media',
  weather: 'Search for Weather',
  people: 'Random Folks',
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
  time: 'h:mm A',
};

export const PLACEHOLDERS = {
  searchInput: 'Enter a search value',
};

export const STRINGS = {
  search: 'search',
  noResultsFound: 'No results found.',
  mediaPlaceHolder: 'You can search for your favorite movie, TV show, or video game.',
  weatherPlaceHolder: 'You can search by zip code, latitude/longitude, or city/state.',
  peoplePlaceHolder: 'You can city, state, and postal code',
};
