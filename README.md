# mrm-task-xo

[![Build Status](https://travis-ci.org/bdougherty/mrm-task-xo.svg)](https://travis-ci.org/bdougherty/mrm-task-xo)

> [Mrm](https://github.com/sapegin/mrm) task that adds [xo](https://github.com/sindresorhus/xo).

## What it does

* Updates the npm test script to run xo
* Adds specified configuration to `package.json`
* Installs xo

## Usage

```
mrm xo
mrm xo --config:xoExtends=bdougherty --config:xoExtends=foo
```

## Options

### `xoSpace` (optional, default: `false`)

Set it to `true` to get 2-space indentation or specify the number of spaces.

This option is set automatically if you have the `indent` option set in your [mrm config](https://github.com/sapegin/mrm#configuration).

This option exists for pragmatic reasons, but I would strongly recommend you read [“Why tabs are superior”](http://lea.verou.me/2012/01/why-tabs-are-clearly-superior/).

### `xoSemicolon` (optional, default: `true`)

Set it to `false` to enforce no-semicolon style.

### `xoPlugins` (optional)

Include third-party [plugins](https://eslint.org/docs/user-guide/configuring.html#configuring-plugins).

### `xoExtends` (optional)

Use one or more [shareable configs](https://eslint.org/docs/developer-guide/shareable-configs.html) or [plugin configs](https://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin) to override any of the default rules.

## License

MIT © [Brad Dougherty](https://brad.is)
