
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://countries.trevorblades.com/",
  documents: "src/graphql/queries/*.graphql",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    },
  }
};

export default config;
