# wechat-help

generate help message of used wechat-bot.

Default format:

```
[bot1 name] help message from bot1
[bot2 name] help message from bot2
```

The bot should export `help` and better to be **named**. See example:

``` javascript
module.exports = function createHelp() {
    return function help(req, res, next) {
        ...
    }
    help.help = 'help message auto generated';
    return help;
};
```

[![build status](https://secure.travis-ci.org/rogerz/wechat-help.png)](http://travis-ci.org/rogerz/wechat-help)

## Installation

This module is installed via npm:

``` bash
$ npm install wechat-help
```

## Example Usage

``` js
var wechatHelp = require('wechat-help');
var wechatBot = require('wechat-bot');

var bot = wechatBot();
bot.use(wechatHelp(bot));
```
