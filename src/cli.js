#!/usr/bin/env node
'use strict';
const meow = require('meow');
const fn = require('npm-scout');

const cli = meow(`
    Usage
  	  $ npm-scout <username>/<name> [GITHUB_TOKEN]
  	Example
  	  $ npm-scout yarnpkg/yarn
  	  {
  	    packageJson: {
          ...
        }
  	    repository: {
          ...
        }
  	  }
`);

if (!cli.input[0]) {
  console.error('Specify a package name and the related username/company name. E.g. yarnpkg/yarn');
  process.exit(2);
}

fn(cli.input[0].split('/')[1], cli.input[0].split('/')[0], cli.input[1] || null)
  .then(res => console.log(JSON.stringify(res, null, '  ')));
