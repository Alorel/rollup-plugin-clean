'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

const del = require('del');

exports.cleanPlugin = function (pluginOpts = {}) {
  const out = {
    name: 'clean-plugin'
  };

  if (pluginOpts.dir) {
    let cleaned = false;
    out.buildStart = function () {
      if (!cleaned) {
        cleaned = true;

        return del(pluginOpts.dir, pluginOpts.delOptions);
      }
    };
  } else {
    let cleaned = {};
    out.renderStart = function ({dir}) {
      if (dir) {
        if (!cleaned[dir]) {
          cleaned[dir] = true;

          return del(dir, pluginOpts.delOptions);
        }
      } else {
        this.warn('outputOptions.dir missing');
      }
    };
  }

  return out;
};
