var util = require('util');

module.exports = function createHelp(bot) {
  function help(req, res, next) {
    var message = req.weixin;
    var helps = [];
    var i = 1;
    bot.stack.forEach(function(mw) {
      var handle = mw.handle;
      if (handle.help) {
        helps.push(util.format('%d - %s', i++, handle.help));
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
