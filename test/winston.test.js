'use strict';
var expect = require('chai').expect

describe('InitializerWinston',function(){
  var apx = require('apx')
  before(function(done){
    apx.once('ready',function(){
      done()
    })
    apx.start({
      sysLogLevel: 2,
      testing: true,
      cwd: __dirname
    })
  })
  it('should setup the log object',function(done){
    var init = require('../lib/winston')
    init.start(apx.instance,function(){
      expect(apx.instance.log).to.be.an('object')
      done()
    })
  })
})