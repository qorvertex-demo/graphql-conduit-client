import { ApolloClient, InMemoryCache, useQuery, useMutation } from "@apollo/client";
import { GET_FEED, GET_ARTICLES, GET_ME, GET_TAGS, CREATE_ARTICLE, FAVORITE_ARTICLE, ADD_COMMENT, LOGIN } from "./queries";

const client = new ApolloClient({ uri: "http://conduit-api/graphql", cache: new InMemoryCache() });

export function Feed() { return useQuery(GET_FEED, { variables: { first: 10 } }); }
export function Articles() { return useQuery(GET_ARTICLES); }
export function Me() { return useQuery(GET_ME); }
export function Tags() { return useQuery(GET_TAGS); }
export function useCreate() { return useMutation(CREATE_ARTICLE); }
export function useFavorite() { return useMutation(FAVORITE_ARTICLE); }
export function useComment() { return useMutation(ADD_COMMENT); }
export function useLogin() { return useMutation(LOGIN); }
