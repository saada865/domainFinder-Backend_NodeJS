'use strict';
const cU = require('consecutively-unique');

module.exports = arr => {
	const rand = cU(0, arr.length - 1);
	return () => arr[rand()];
};
