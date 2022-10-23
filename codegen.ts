
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:1337/graphql",
  documents: "Graphql/**/*.graphql",
  generates: {
    "generated.tsx": {
      preset: "client",
      plugins: [
        'typescript',
       'typescript-operations',
       'typescript-react-apollo'
      ]
    }
  }
};

export default config;
