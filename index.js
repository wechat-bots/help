module.exports = function createHelp(bot) {
  function help(req, res, next) {
    var message = req.weixin;
    var helps = bot.stack.map(function (mw) {
      return mw.name + ":" + mw.help || 'ready';
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
  return help;
};
