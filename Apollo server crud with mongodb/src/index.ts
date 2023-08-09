import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import dotenv from 'dotenv'
import mongoose from 'mongoose'

import { typeDefs } from '../graphql/typeDefs.js'
import { resolvers } from '../graphql/resolver.js'

dotenv.config()
const connection_url = process.env.URL!

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(connection_url)
        console.log(`MongoDB Connected:  ${conn.connection.host}`);
    } catch (error: any) {
        console.log(`Error: ${error.message}`)
    }
}
connectDB()

const sever = new ApolloServer({ typeDefs, resolvers })
const { url } = await startStandaloneServer(sever, {
    listen: { port: +process.env.PORT! }
})

console.log(`Server running at: ${url}`);
