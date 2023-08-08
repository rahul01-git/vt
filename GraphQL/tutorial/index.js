    //import
const express = require('express')
let usersList = require('./mock_data.json')
const { graphqlHTTP } = require('express-graphql')
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql')
const { resolve } = require('path')

//initialize
const app = express()

//user schema
const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
    }),
})

//query Structure
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        //to get all user
        users: {
            type: new GraphQLList(UserType),
            resolve() {
                return usersList
            }
        },
        //to get user by id
        user: {
            type: UserType,
            args: {
                id: { type: GraphQLID },
            },
            resolve(parent, args) {
                return usersList.find((user) => user.id === parseInt(args.id))
            }
        }

    }
})

//mutation
const mutations = new GraphQLObjectType({
    name: "mutations",
    fields: {
        //adding a user
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString }, email: { type: GraphQLString }
            },
            resolve(parent, { name, email }) {
                const newUser = { name, email, id: Date.now() }
                usersList.push(newUser)
                return newUser
            }

        },
        //update a user
        updateUser: {
            type: UserType,
            args: {
                id: { type: GraphQLID },
                name: { type: GraphQLString },
                email: { type: GraphQLString }
            },
            resolve(parent, { id, name, email }) {
                const user = usersList.find(u => u.id === parseInt(id))
                if (!user) throw new Error(`User with id: ${id} not found`)
                user.email = email
                user.name = name
                return user
            },
        },

        //delete a user
        deleteUser: {
            type: UserType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent,{id}){
                const user = usersList.find(u=> u.id === parseInt(id))
                usersList = usersList.filter(u=>u.id !== parseInt(id))
                return user
            }
        }

    }
})

const schema = new GraphQLSchema({ query: RootQuery, mutation: mutations })

//middleware
app.use('/graphql', graphqlHTTP({
    schema, graphiql: true
}))

//server spin
app.listen(5000, () => console.log('server is running in port 5000'))
