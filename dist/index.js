'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index_js = require('./components/atoms/index.js');



Object.keys(index_js).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return index_js[k];
		}
	});
});
