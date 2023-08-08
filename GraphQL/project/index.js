const { graphqlHTTP } = require('express-graphql')

const app = require('express')()
const PORT = 8080
const schema = require('./Schemas')

app.use('/graphql', graphqlHTTP({
    schema, //schema => query(get) and mutation(post, patch , delete)
    graphiql: true
}))


app.listen(PORT, () => console.log('server is running in port ' + PORT))

