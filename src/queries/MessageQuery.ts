import { gql } from "@apollo/client";

export const GET_MESSAGES = gql`
query GetMessages {
  messages {
    _id,
    createdAt,
    message,
    user {
      _id,
      name
    }
  }
}
`;