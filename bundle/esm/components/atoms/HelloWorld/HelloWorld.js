'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _JSXStyle = require('styled-jsx/style');
var React = require('react');
var utils_ts = require('./utils.ts');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _JSXStyle__default = /*#__PURE__*/_interopDefaultLegacy(_JSXStyle);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var HelloWorld =
/** @class */
function (_super) {
  __extends(HelloWorld, _super);

  function HelloWorld() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HelloWorld.prototype.render = function () {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "jsx-2387958197"
    }, /*#__PURE__*/React__default['default'].createElement("h1", {
      className: "jsx-2387958197" + " " + "hello"
    }, "Hello ", /*#__PURE__*/React__default['default'].createElement("span", {
      className: "jsx-2387958197" + " " + "hello__red"
    }, "World!"), utils_ts.add(1, 1)), /*#__PURE__*/React__default['default'].createElement(_JSXStyle__default['default'], {
      id: "2387958197"
    }, [".hello.jsx-2387958197{color:pink;}", ".hello__red.jsx-2387958197{color:red;}"]));
  };

  return HelloWorld;
}(React__default['default'].Component);

exports.default = HelloWorld;
