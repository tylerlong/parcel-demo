// eslint-disable-next-line node/no-unpublished-import
import {Parcel} from '@parcel/core';

const bundler = new Parcel({
  entries: 'src/index.ts',
  defaultConfig: '@parcel/config-default',
  shouldDisableCache: true,
  mode: 'production',
  targets: {
    test: {
      context: 'node',
      distDir: 'dist2',
    },
  },
  defaultTargetOptions: {
    shouldScopeHoist: true,
  },
  additionalReporters: [
    {
      packageName: '@parcel/reporter-cli',
      resolveFrom: __filename,
    },
  ],
});

bundler.run();
