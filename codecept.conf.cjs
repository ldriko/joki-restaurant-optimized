const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

module.exports.config = {
  tests: 'src/e2e/**/*.spec.cjs',
  output: 'src/e2e/outputs',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:9000',
      show: true,
      windowSize: 'y',
    },
  },
  // include: {
  //   I: './steps_file.ts',
  // },
  name: 'joki-restaurant-optimized',
};
