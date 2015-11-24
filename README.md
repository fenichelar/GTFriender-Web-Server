# GTFriender Web Server

GTFriender Web Server written in JavaScript with Sails.js.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Sails.js](http://sailsjs.org)
  - `npm install -g sails`
* [Forever](https://github.com/foreverjs/forever)
  - `npm install -g forever`

## Installation

* `git clone https://github.com/fenichelar/GTFriender-Web-Server`
* `cd GTFriender-Web-Server`
* `npm install`

## Running for Development

* Use one of the following
  - `./scripts/start.sh` (start in development mode)
  - `./scripts/start.sh --log` (start in development mode and view log)
  - `./scripts/start.sh --prod` (start in production mode)
* Visit the app at [http://localhost:1337](http://localhost:1337)
* The app with automatically update when code changes are made

## View Log

* `./scripts/logs.sh`

## Stopping

* `./scripts/stop.sh`
