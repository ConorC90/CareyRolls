import createApolloClient from '../apollo/client';
import { GET_POSTS_QUERY } from '../apollo/queries';

export async function fetchPosts(perPage, offset) {
  const client = createApolloClient();

  const { data, loading, error } = await client.query({
    query: GET_POSTS_QUERY,
    variables: { perPage, offset },
    fetchPolicy: 'network-only',
  });

  if (loading) {
    // Handle loading state if necessary
  }

  if (error) {
    throw new Error("Failed to fetch data");
  }

  const posts = data.posts.edges.map(edge => edge.node);
  const totalPosts = data.posts.pageInfo.total;

  return { data: posts, totalPosts };
}
