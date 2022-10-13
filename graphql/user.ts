export const GET_USERS = `
  query GetUsers {
    users {
      results {
        id {
          value
        }
        name {
          first
          last
        }
        email
        picture {
          thumbnail
        }
        location {
          street {
            number
            name
          }
          city
          state
          country
          postcode
          coordinates {
            latitude
            longitude
          }
          timezone {
            offset
            description
          }
        }
        dob {
          date
          age
        }
        registered {
          date
          age
        }
        phone
        cell
        nat 
      }
    }
  }
`;
