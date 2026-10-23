import { gql } from "@apollo/client";

// Consumes the RealWorld (Conduit) GraphQL API exposed by the separate
// spring-boot-realworld-example-app repo (Netflix DGS). Root fields here match
// the server's @DgsQuery/@DgsMutation operations by name.

export const GET_FEED = gql`
  query Feed($first: Int, $after: String) {
    feed(first: $first, after: $after) {
      edges { node { title description } }
    }
  }
`;

export const GET_ARTICLES = gql`
  query Articles($first: Int) {
    articles(first: $first) { edges { node { slug } } }
  }
`;

export const GET_ME = gql`
  query Me {
    me { username email }
  }
`;

export const GET_TAGS = gql`
  query Tags { tags }
`;

export const CREATE_ARTICLE = gql`
  mutation CreateArticle($input: CreateArticleInput!) {
    createArticle(input: $input) { article { slug title } }
  }
`;

export const FAVORITE_ARTICLE = gql`
  mutation FavoriteArticle($slug: String!) {
    favoriteArticle(slug: $slug) { article { slug favorited } }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($slug: String!, $body: String!) {
    addComment(slug: $slug, body: $body) { comment { id body } }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) { user { token } }
  }
`;
