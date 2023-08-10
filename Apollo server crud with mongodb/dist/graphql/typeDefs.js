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

    type Query{
        authors: [Author!]!
        books: [Book!]!
    }

    type Mutation{
        createAuthor(name: String!, age: Int) : Author!
        updateAuthor(id: ID!, name: String!, age:Int) : Author!
        deleteAuthor(id:ID!) : Author!

        createBook(title: String!, authorId: ID!) : Book!
        updateBook(id:ID!, title: String!):Book!
        deleteBook(id:ID!): Book!
    }
`;
