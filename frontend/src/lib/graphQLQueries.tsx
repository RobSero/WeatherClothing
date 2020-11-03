import gql from 'graphql-tag'


export const WEATHER_QUERY = gql`
query ApplicationQueries($day: Int!, $lat: Float!, $lon: Float!) {
  forecast(day:$day, lat:$lat, lon:$lon){
    weather {
     main
     description
     id
     icon
    }
  }
}
`


export const ALL_CLOTHES_QUERY = gql`
query ApplicationQueries {
  allClothes{
    id
    }
  }

`