module.exports = function wechatHelp() {
  return function wechatHelp(req, res, next) {
    var message = req.weixin;
    if (message) {
      return res.reply({
        type: 'text',
        content: 'hello'
      });
    } else {
      return next();
    }
  }
};
