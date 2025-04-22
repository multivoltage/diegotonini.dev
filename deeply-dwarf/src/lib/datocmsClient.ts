import { GraphQLClient } from "graphql-request";

const endpoint = "https://graphql.datocms.com/";
const readOnlyToken = "16576943e9c4bd62e4046ed7ee0621";

export const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${readOnlyToken}`,
  },
});
