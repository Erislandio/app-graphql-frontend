import gql from "graphql-tag";

const login = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
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
      code
      message
    }
  }
`;

export { login };
