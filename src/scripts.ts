// eslint-disable-next-line node/no-unpublished-import
import {Parcel} from '@parcel/core';

const bundler = new Parcel({
  entries: 'src/index.ts',
  defaultConfig: '@parcel/config-default',
  mode: 'production',
  targets: {
    test: {
      context: 'node',
      distDir: 'dist2',
    },
  },
});

const main = async () => {
  const {bundleGraph, buildTime} = await bundler.run();
  const bundles = bundleGraph.getBundles();
  console.log(`✨ Built ${bundles.length} bundles in ${buildTime}ms!`);
};

main();
