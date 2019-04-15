giftcli
=======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/giftcli.svg)](https://npmjs.org/package/giftcli)
[![Downloads/week](https://img.shields.io/npm/dw/giftcli.svg)](https://npmjs.org/package/giftcli)
[![License](https://img.shields.io/npm/l/giftcli.svg)](https://github.com/msweeney777/giftcli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g giftcli
$ giftcli COMMAND
running command...
$ giftcli (-v|--version|version)
giftcli/0.0.0 darwin-x64 node-v10.13.0
$ giftcli --help [COMMAND]
USAGE
  $ giftcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`giftcli add`](#giftcli-add)
* [`giftcli delete-list`](#giftcli-delete-list)
* [`giftcli delete-log`](#giftcli-delete-log)
* [`giftcli help [COMMAND]`](#giftcli-help-command)
* [`giftcli idea`](#giftcli-idea)
* [`giftcli list`](#giftcli-list)
* [`giftcli remove`](#giftcli-remove)

## `giftcli add`

Generates a depository of gift ideas

```
USAGE
  $ giftcli add

OPTIONS
  -n, --gift=gift  gift

DESCRIPTION
  ...
  Adds a new gift idea to the db.json file.
```

_See code: [src/commands/add.js](https://github.com/msweeney777/giftcli/blob/v0.0.0/src/commands/add.js)_

## `giftcli delete-list`

Describe the command here

```
USAGE
  $ giftcli delete-list

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/delete-list.js](https://github.com/msweeney777/giftcli/blob/v0.0.0/src/commands/delete-list.js)_

## `giftcli delete-log`

Deletes the entire list of gifts

```
USAGE
  $ giftcli delete-log

DESCRIPTION
  ...
  Deletes every item in the db.json file
```

_See code: [src/commands/delete-log.js](https://github.com/msweeney777/giftcli/blob/v0.0.0/src/commands/delete-log.js)_

## `giftcli help [COMMAND]`

display help for giftcli

```
USAGE
  $ giftcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `giftcli idea`

Randomly returns an idea from the gift log

```
USAGE
  $ giftcli idea

DESCRIPTION
  ...
  Generates a random id, then prints the correlating object from the log database.
```

_See code: [src/commands/idea.js](https://github.com/msweeney777/giftcli/blob/v0.0.0/src/commands/idea.js)_

## `giftcli list`

Shows existing gifts 

```
USAGE
  $ giftcli list

DESCRIPTION
  ...
  Shows all the listed gifts sorted by their ids
```

_See code: [src/commands/list.js](https://github.com/msweeney777/giftcli/blob/v0.0.0/src/commands/list.js)_

## `giftcli remove`

Describe the command here

```
USAGE
  $ giftcli remove

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/remove.js](https://github.com/msweeney777/giftcli/blob/v0.0.0/src/commands/remove.js)_
<!-- commandsstop -->
