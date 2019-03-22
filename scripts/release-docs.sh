rm -rf styleguide
rm -rf .out
npx styleguidist build
npm run build-storybook
cp -r styleguide .out/docs
npm run deploy-storybook -- --existing-output-dir=.out