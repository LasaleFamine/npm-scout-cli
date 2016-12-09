# npm-scout-cli [![Build Status](https://travis-ci.org/LasaleFamine/npm-scout-cli.svg?branch=master)](https://travis-ci.org/LasaleFamine/npm-scout-cli)

> Get the [npm-scout](https://github.com/LasaleFamine/npm-scout) results from command-line


## Install

```
$ yarn global add npm-scout-cli
```


## Usage

```
$ npm-scout --help

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

```

The `GITHUB_TOKEN` will be supported soon as an ENV var.
Without it there is a rate limit of calls to the GitHub API.


## Related

- [npm-scout](https://github.com/LasaleFamine/npm-scout) - API for this module


## License

[MIT](https://github.com/LasaleFamine/npm-scout-cli/blob/master/LICENSE.md) &copy; LasaleFamine
