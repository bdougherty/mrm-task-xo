'use strict';

const { packageJson, install } = require('mrm-core');

function task(config) {
	const { indent, xoSpace, xoSemicolon, xoPlugins, xoExtends } = config.defaults({
		xoSpace: false,
		xoSemicolon: true
	}).values();

	const packages = ['xo'];
	const pkg = packageJson()
		.prependScript('test', 'xo')
		.unset('xo.space')
		.unset('xo.semicolon');

	if (xoSpace !== false || indent !== 'tab') {
		pkg.set('xo.space', xoSpace || indent);
	}

	if (xoSemicolon === false) {
		pkg.set('xo.semicolon', false);
	}

	if (xoPlugins) {
		const pluginArray = [].concat(xoPlugins);

		pkg.set('xo.plugins', pluginArray);
		packages.push(...pluginArray.map((plugin) => `eslint-plugin-${plugin}`));
	}

	if (xoExtends) {
		const extendsArray = [].concat(xoExtends);

		pkg.set('xo.extends', xoExtends);
		packages.push(...extendsArray.map((config) => `eslint-config-${config}`));
	}

	pkg.save();
	install(packages);
}

task.description = 'Adds xo to the project';
module.exports = task;
