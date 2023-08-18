export const typeDefs = `#graphql
    type Author {
        id: ID!
        name: String!
        books(limit: Int = 3): [Book!]
        age:Int
    }

    type Book{
        id: ID!
        title: String!
        authorId: ID!
    }

    type User{
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }

    input RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }

    type Query{
        authors: [Author!]!
        books: [Book!]!
    }

    type Mutation{

        register(registerInput: RegisterInput) : User!
        login

        createAuthor(name: String!, age: Int) : Author!
        updateAuthor(id: ID!, name: String!, age:Int) : Author!
        deleteAuthor(id:ID!) : Author!

        createBook(title: String!, authorId: ID!) : Book!
        updateBook(id:ID!, title: String!):Book!
        deleteBook(id:ID!): Book!
    }
`
