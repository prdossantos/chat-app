import { gql } from '@apollo/client';

export const CREATE_MESSAGE = gql`
  mutation CreateMessageMutation($createMessageMessage: String, $createMessageUserId: String) {
    createMessage(message: $createMessageMessage, userId: $createMessageUserId) {
      message
      userId
      _id
      createdAt
      user {
        _id
        name
      }
    }
  }
`;