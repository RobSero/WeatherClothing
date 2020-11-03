import gql from 'graphql-tag'


export const WEATHER_QUERY = gql`
query weatherQueries($day: Int!, $lat: Float!, $lon: Float!) {
  forecast(day:$day, lat:$lat, lon:$lon){
    weather{
     main
     description
     id
     icon
    }
  }
}
`