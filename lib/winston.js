'use strict';
var winston = require('winston')
exports.name = 'kue'
exports.description = 'Kue initializer'
exports.start = function(apx,fn){
  var transports = apx.config.get('winston.transports') || [new (winston.transports.Console)()]

  apx.sysLog.info('Setting up Winston Logger')

  //testing mode uses the memory logger
  if(apx.config.get('testing')){
    require('winston-memory').Memory()
    transports = [new (winston.transports.Memory)()]
  }

  //Setup the logger
  apx.log = new (winston.Logger)({
    transports: transports
  })

  apx.sysLog.info('Winston logger now active, will continue to sysLog init messages')
  fn(null,apx)

}
exports.stop = function(apx,fn){
  fn(null)
}