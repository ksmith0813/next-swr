export const GET_WEATHER = `
  query($search:String) {
    weather(search:$search) {
      location {
        country
        name
        region
        lat
        lon
        localtime
        tz_id	
      }
      current {
        temp_f
        temp_c
        feelslike_f
        feelslike_c
        condition {
          text
          icon
        }
        humidity
        cloud
        wind_mph
        wind_dir
      }
      forecast {
        forecastday {
          astro {
            sunrise
            sunset
            moon_phase
          }
          date
          hour {
            condition {
              text
              icon
            }
            temp_c
            temp_f
            time_epoch
            time
          }
        }
      }
    }
  }
`;
