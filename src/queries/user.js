import gql from "graphql-tag";

const user = gql`
  query getUser($id: String!) {
    user(id: $id) {
      _id
      name
      phone
      email
      lastname
      document
      rg
      createdAt
      updatedAt
      password
    }
  }
`;

export { user };
