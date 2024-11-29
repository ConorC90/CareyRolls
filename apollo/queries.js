import { gql } from '@apollo/client';

export const GET_POSTS_QUERY = gql`
  query GetPosts($perPage: Int, $offset: String) {
    posts(first: $perPage, after: $offset, where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          id
          title
          content
          date
        }
      }
      pageInfo {
        total
      }
    }
  }
`;
