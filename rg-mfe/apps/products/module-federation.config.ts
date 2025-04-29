import { ModuleFederationConfig } from '@nx/module-federation';
// This file is used to configure module federation for the greeting app.

const config: ModuleFederationConfig = {
  name: 'products', // <-- this line was added
  exposes: {
    './RemoteButton': './src/components/remote-button.tsx', // <-- this line was added
  },
};
export default config;