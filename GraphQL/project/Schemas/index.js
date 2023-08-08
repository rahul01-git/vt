const { GraphQLObjectType, GraphQLList, GraphQLSchema, GraphQLInt, GraphQLString } = require("graphql")
const UserType = require('./TypeDefs/UserType')
let userData = require('../mock_data.json')


const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        //get all users
        getAllUsers: {
            type: new GraphQLList(UserType),
            resolve() {
                if(userData.length === 0) throw new Error('No user added yet !')
                return userData
            }
        },
        //get user by id
        getUserById: {
            type: UserType,
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                const user = userData.find(u => u.id === args.id)
                if(!user) throw new Error('No user with id: ' + args.id)
                return user
            }
        }

    }

})


const Mutations = new GraphQLObjectType({
    name: "Mutations",
    fields: {
        createUser: {
            type: UserType,
            args: {
                firstName: { type: GraphQLString }, lastName: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parent, { firstName, lastName, email, password }) {
                let newUser = { id: userData.length + 1, firstName, lastName, email, password }
                userData.push(newUser)
                return newUser
            }
        },

        //updateUser
        updateUser:{
            type: UserType,
            args:{id: {type:GraphQLInt},firstName: {type:GraphQLString},lastName: {type: GraphQLString},email: {type:GraphQLString},password: {type:GraphQLString}},
            resolve(parent,{id,firstName,lastName,email,password}){
                const user = userData.find(u=>u.id === id)
                if(!user) throw new Error('No user with id: ' + id)
                user.firstName = firstName,
                user.lastName = lastName,
                user.email = email,
                user.password = password
                return user
            }
        },


        //deleteUser
        deleteUser:{
            type: UserType,
            args: {id:{type:GraphQLInt}},
            resolve(parent,{id}){
                const user = userData.find(u=>u.id === id)
                if(!user) throw new Error('No user with id: ' + id)
                userData = userData.filter(u=>u.id !== id)
                return user
            }
        }
    }
})

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutations })