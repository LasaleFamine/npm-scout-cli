import test from 'ava';
import execa from 'execa';

test(async t => {
  const stdout = (await execa('./src/cli.js', ['yarnpkg/yarn'])).stdout;
  t.is(JSON.parse(stdout).packageJson.name, 'yarn');
  t.is(JSON.parse(stdout).repository.full_name, 'yarnpkg/yarn');
});
