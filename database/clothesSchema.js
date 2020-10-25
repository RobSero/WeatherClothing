const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLFloat } = require('graphql')
const axios = require('axios')
require('dotenv').config()
const key = process.env.WEATHER_API_KEY

const forecastType = new GraphQLObjectType({
  name: 'forecast',
  fields: () => ({
    sunrise: { type: GraphQLInt },
    weather: { type: GraphQLList(weatherDetailsType) }  // forecast of following week indexed 0-7
  })
})

const weatherDetailsType = new GraphQLObjectType({
  name: 'weatherDetails',
  fields: () => ({
    id: { type: GraphQLInt },
    main: { type: GraphQLString },
    description: { type: GraphQLString },
    icon: { type: GraphQLString }
  })
})

const test = new GraphQLObjectType({
  name: 'test',
  fields: () => ({
    hehe: { type: GraphQLString }
  })
})



// Root query weather

const weatherQuery = new GraphQLObjectType({
  name: 'weatherQueries',
  fields: {
    forecast: {
      type: forecastType,
      args: {
        day: { type: GraphQLInt },
        lat: { type: GraphQLFloat },
        lon: { type: GraphQLFloat }
      },
      resolve(parentValue,args) {
        console.log('FETCHING')
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${args.lat}&lon=${args.lon}&appid=${key}&exclude=minutely,hourly,current`).then(res => res.data.daily[args.day])
      }
    },
    test: {
      type: test,
      resolve(parentValue,args) {
        return { NAME: 'JIMMY', hehe: 'chicken' }
      }
    }
  }
})



module.exports = new GraphQLSchema({
  query: weatherQuery
})


















// const clothesQueries = new GraphQLObjectType({
//   name: 'ClothesQueries',
//   fields: {
//     allClothes: {
//       type: GraphQLList(ClothingType),
//       resolve(parentValue,args){
//         return tShirt
//       }
//     },



// const ClothingType = new GraphQLObjectType({
//   name: 'Clothing',
//   fields: () => ({
//     id: { type: GraphQLString },
//     title: { type: GraphQLString },
//     description: { type: GraphQLString },
//     price: { type: GraphQLInt },
//     image: { type: GraphQLString },
//     colour: { type: GraphQLString },
//     size: { type: GraphQLString },
//     material: { type: GraphQLString },
//     weather: { type: GraphQLString },
//     category: { type: GraphQLString },
//     link: { type: GraphQLString }
//   })
// })







// const clothesQueries = new GraphQLObjectType({
//   name: 'ClothesQueries',
//   fields: {
//     allClothes: {
//       type: GraphQLList(ClothingType),
//       resolve(parentValue,args){
//         return tShirt
//       }
//     },
//     clothesDetails: {
//       type: ClothingType,
//       args: {
//         id: { type: GraphQLString }
//       },
//       resolve(parentValue,args){
//         return tShirt[args.id]
//       }
//     }

//   }
// })






