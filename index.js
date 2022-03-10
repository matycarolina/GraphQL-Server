const { ApolloServer, MockList } = require("apollo-server");

const typeDefs = require("./schema.graphql");

const mocks = {
  // String: () => "My custom mock string",
  Album: () => {
    return { name: () => "Album Title", artists: () => new MockList(1) };
  },
  Track: () => {
    return { name: () => "Track Title", artists: () => new MockList(1) };
  },
  Artist: () => {
    return { name: () => "Artist Name" };
  },
  Query: () => {
    return { releases: () => new MockList([0, 15]) };
  }
};

const server = new ApolloServer({
  typeDefs,
  mocks
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
