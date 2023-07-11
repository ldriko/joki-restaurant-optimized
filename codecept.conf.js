import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

export const config = {
  tests: 'src/e2e/**/*.spec.ts',
  output: 'src/e2e/outputs',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:9000',
      show: true,
      windowSize: 'y',
    },
  },
  include: {
    I: './steps_file.ts',
  },
  name: 'joki-restaurant-optimized',
};
