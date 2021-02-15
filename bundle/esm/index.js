'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index_ts = require('./components/atoms/index.ts');



Object.keys(index_ts).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return index_ts[k];
		}
	});
});
