var expect = require('chai').expect,
    wechatHelp = require('..');
var wechatBot = require('wechat-bot');

describe('wechat-help', function() {
  it('should export middleware creater', function () {
    expect(wechatHelp()).to.be.a('function');
  });
  it('should generate help message', function (done) {
    var bot = wechatBot();
    var help = wechatHelp(bot);
    var req = {
      weixin: {}
    };
    var res = {
      reply: function (result) {
        expect(result.content).to.include(help.help);
        expect(result.content).to.include(help.name);
        done();
      }
    };
    bot.use(help);
    bot(req, res);
  });
});
