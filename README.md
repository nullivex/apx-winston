apx-winston [![Build Status](https://travis-ci.org/snailjs/apx-winston.png?branch=master)](https://travis-ci.org/snailjs/apx-winston)
=======

Winston Logger initializer for APX API server

## Usage

Simply add the initializer to the Apx config.

```
$ npm install apx apx-winston
```

```js
var apx = require('apx')
apx.start({
  initializers: 'apx-winston'
})
```

## Configuration

### Transports
* Variable `winston.transports`
* Required **no**
* Default `[new (winston.transports.Console)()]`

Array of instantiated transports to be configured with Winston.

**NOTE** In **testing mode** the transports are hardcoded to
`transports = [new (winston.transports.Memory)()]`

## Changelog

### 0.1.0
* Initial release
