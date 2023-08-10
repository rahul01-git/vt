import Author from '../models/Author.js';
import Book from '../models/Book.js';
export const resolvers = {
    Query: {
        authors: async () => {
            const authors = await Author.find({});
            // for(const author of authors){
            //     author.books = await Book.find({authorId: author._id})
            // }
            return authors;
        },
        books: async () => await Book.find({})
    },
    Mutation: {
        createAuthor: async (parent, args) => {
            const newAuthor = new Author(args);
            return await newAuthor.save();
        },
        updateAuthor: async (parent, args) => {
            const { id, name, age } = args;
            await Author.findByIdAndUpdate(id, { name, age });
            return await Author.findById(id);
        },
        deleteAuthor: async (parent, args) => {
            const deletedAuthor = Author.findByIdAndRemove(args.id);
            await Book.deleteMany({ "authorId": args.id });
            return deletedAuthor;
        },
        createBook: async (parent, args) => {
            const newBook = new Book(args);
            newBook.authorId = args.authorId;
            newBook.title = args.title;
            return await newBook.save();
        },
        updateBook: async (parent, args) => {
            const { id, title } = args;
            await Book.findByIdAndUpdate(id, { title });
            return await Book.findById(id);
        },
        deleteBook: async (parent, args) => {
            const deletedBook = await Book.findByIdAndRemove(args.id);
            return deletedBook;
        }
    }
};
