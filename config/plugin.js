'use strict'
const path = require('path')
/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }

// }

exports.validate = {
  enable: true,
  package: 'egg-validate',
}
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
}
exports.auth = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-auth'),
}
