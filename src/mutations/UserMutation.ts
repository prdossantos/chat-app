import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SignInMutation($signInName: String) {
    signIn(name: $signInName) {
      name
      _id
    }
  }
`;