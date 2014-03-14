var expect = require('chai').expect,
    wechatHelp = require('..');

describe('wechat-help', function() {
  it('should export middleware creater', function() {
    expect(wechatHelp()).to.be.a('function');
  });
});
