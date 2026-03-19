import dotenv from 'dotenv';

async function globalSetup() {
  dotenv.config({
    path: `./env/.env.${process.env.testEnv}.ts`,
    override: true,
  });
}
export default globalSetup;
