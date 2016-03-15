# GTFriender Web Server

[![Build Status][travis-badge]][travis-badge-url]
[![Dependency Status][david-badge]][david-badge-url]
[![devDependency Status][david-badge-dev]][david-badge-dev-url]
[![Code Climate][codeclimate]][codeclimate-url]
[![Test Coverage][codeclimate-coverage]][codeclimate-coverage-url]

GTFriender Web Server written in JavaScript with Sails.js.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Sails.js](http://sailsjs.org)
  - `npm install -g sails`
* [Forever](https://github.com/foreverjs/forever)
  - `npm install -g forever`
* [Mocha](https://mochajs.org/)
  - `npm install -g mocha`
* [Istanbul](https://github.com/gotwarlost/istanbul)
  - `npm install -g istanbul`

## Installation

* `git clone https://github.com/fenichelar/GTFriender-Web-Server`
* `cd GTFriender-Web-Server`
* `npm install`

## Development

### Running

* Use one of the following
  - `./scripts/start.sh` (start in development mode)
  - `./scripts/start.sh --log` (start in development mode and view log)
  - `./scripts/start.sh --prod` (start in production mode)
* Visit the app at [http://gtfriender.dev:1337](http://gtfriender.dev:1337)
* The app with automatically update when code changes are made

### Viewing  Log

* `./scripts/logs.sh`

### Stopping

* `./scripts/stop.sh`

### Code Generators

Make use of the many generators for code, see [http://sailsjs.org/documentation/reference/command-line-interface/sails-generate](http://sailsjs.org/documentation/reference/command-line-interface/sails-generate) for more details.

### Checking Code Quality

* `npm run jshint`

### Running Tests

* `npm test`

### Checking Code Coverage

* `npm run coverage`

## Deploying

The app is deployed automatically using Travis CI.

[travis-badge]: https://travis-ci.org/fenichelar/GTFriender-Web-Server.svg
[travis-badge-url]: https://travis-ci.org/fenichelar/GTFriender-Web-Server
[david-badge]: https://david-dm.org/fenichelar/GTFriender-Web-Server.svg
[david-badge-url]: https://david-dm.org/fenichelar/GTFriender-Web-Server
[david-badge-dev]: https://david-dm.org/fenichelar/GTFriender-Web-Server/dev-status.svg
[david-badge-dev-url]: https://david-dm.org/fenichelar/GTFriender-Web-Server#info=devDependencies
[codeclimate]: https://codeclimate.com/github/fenichelar/GTFriender-Web-Server/badges/gpa.svg
[codeclimate-url]: https://codeclimate.com/github/fenichelar/GTFriender-Web-Server
[codeclimate-coverage]: https://codeclimate.com/github/fenichelar/GTFriender-Web-Server/badges/coverage.svg
[codeclimate-coverage-url]: https://codeclimate.com/github/fenichelar/GTFriender-Web-Server/coverage
