import { buildSchema } from "graphql";

// define GQL schemas; consumed by body of POST req
export const schema = buildSchema(`
  type User{
    _id: ID!
    username: String!
    email: String!
    age: Int
    createdAt: String!
  }

  type Query{
    users: [User!]!
    userByUsername(username: String!): User
  }
`);
