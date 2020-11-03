const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLFloat } = require('graphql')
const axios = require('axios')
const Clothes = require('../database/ClothingModels')
require('dotenv').config()
const key = process.env.WEATHER_API_KEY


/* ---------------------------------------------------
                   WEATHER QUERIES
-----------------------------------------------------*/

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


/* ---------------------------------------------------
                   CLOTHES QUERIES
-----------------------------------------------------*/

const ClothingType = new GraphQLObjectType({
  name: 'Clothing',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLInt },
    image: { type: GraphQLString },
    colour: { type: GraphQLString },
    size: { type: GraphQLString },
    material: { type: GraphQLString },
    weather: { type: GraphQLList(GraphQLInt) } ,
    category: { type: GraphQLString },
    link: { type: GraphQLString }
  })
})



/* ---------------------------------------------------
                   ROOT QUERIES
-----------------------------------------------------*/


const AllQueries = new GraphQLObjectType({
  name: 'ApplicationQueries',
  fields: {

    allClothes: {
      type: GraphQLList(ClothingType),
      async resolve(parentValue,args) {
        const allClothes = await Clothes.find()
        return allClothes 
      }
    },

    oneClothes: {
      type: ClothingType,
      args: {
        id: { type: GraphQLString }
      },
      async resolve(parentValue,args) {
        const oneClothesItem = await Clothes.findById(args.id)
        return  oneClothesItem 
      }
    },
    
    forecast: {
      type: forecastType,
      args: {
        day: { type: GraphQLInt },
        lat: { type: GraphQLFloat },
        lon: { type: GraphQLFloat }
      },
      resolve(parentValue,args) {
        console.log('GETTING WEATHER')
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${args.lat}&lon=${args.lon}&appid=${key}&exclude=minutely,hourly,current`)
          .then(res => res.data.daily[args.day])
      }
    }
  
  }
})





module.exports = new GraphQLSchema({
  query: AllQueries
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






