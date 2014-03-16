var util = require('util');

module.exports = function createHelp(bot) {
  function help(req, res, next) {
    var message = req.weixin;
    var helps = [];
    bot.stack.forEach(function(mw) {
      var handle = mw.handle;
      if (handle.help) {
        helps.push(util.format('[%s] %s', handle.name, handle.help));
      }
    });
    if (message) {
      return res.reply({
        type: 'text',
        content: helps.join('\n')
      });
    } else {
      return next();
    }
  }
  help.help = 'help message auto generated';
  return help;
};
