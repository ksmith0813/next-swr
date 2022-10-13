export const GET_BREWERIES = `
  query GetBreweries {
    breweries {
      id
      name
      brewery_type
      street
      address_2
      address_3
      city
      state
      county_province
      postal_code
      country
      longitude
      latitude
      phone
      website_url
      updated_at
      created_at
    }
  }
`;
