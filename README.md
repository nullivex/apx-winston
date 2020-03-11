# APX Winston

## Kado

STOP AND READ THIS

APX or Apex is no longer maintained and is superseded by Kado.

A new package is available to handle all your JavaScript needs.
See [kado.org](https://kado.org) for details.

## Summary

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

### 0.1.1
* Fixed plugin name

### 0.1.0
* Initial release
