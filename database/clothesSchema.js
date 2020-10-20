const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList } = require('graphql')

const ClothingType = new GraphQLObjectType({
  name: 'Clothing',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLInt },
    image: { type: GraphQLString },
    colour: { type: GraphQLString },
    size: { type: GraphQLString },
    material: { type: GraphQLString },
    weather: { type: GraphQLString },
    category: { type: GraphQLString },
    link: { type: GraphQLString }
  }
})

const tShirt =   [{
  id: 0,
  title: 'hello',
  description: 'hello',
  price: 44,
  image: 'hello',
  colour: 'hello',
  size: 'hello',
  material: 'hello',
  weather: 'hello',
  category: 'hello',
  link: 'hello'
},
{
  id: 1,
  title: 'hello',
  description: 'hello',
  price: 15,
  image: 'hello',
  colour: 'hello',
  size: 'hello',
  material: 'hello',
  weather: 'hello',
  category: 'hello',
  link: 'hello'
}]




const clothesQueries = new GraphQLObjectType({
  name: 'ClothesQueries',
  fields: {
    allClothes: {
      type: GraphQLList(ClothingType),
      resolve(parentValue,args){
        return tShirt
      }
    },
    clothesDetails: {
      type: ClothingType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parentValue,args){
        return tShirt[args.id]
      }
    }

  }
})


module.exports = new GraphQLSchema({
  query: clothesQueries
})



