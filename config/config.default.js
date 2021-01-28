/* eslint valid-jsdoc: "off" */

'use strict'
const path = require('path')
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611672104308_4745'

  // add your middleware config here
  config.middleware = ['httpLog']
  config.httpLog = {
    type: 'all',
  }
  config.security = {
    csrf: {
      enable: false,
    },
  }
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
    // root: path.join(appInfo.baseDir, 'app/html'),
    root: [path.join(appInfo.baseDir, 'app/html'), path.join(appInfo.baseDir, 'app/view')].join(
      ','
    ),
  }
  config.ejs = {
    delimiter: '$',
  }
  config.static = {
    prefix: '/assets/',
    dir: path.join(appInfo.baseDir, 'app/assets'),
  }
  config.session = {
    key: 'MUKE_SESS',
    httpOnly: true,
    maxAge: 1000 * 50,
    renew: true,
  }
  config.auth = {
    exclude: ['/home', '/user', '/login', '/logout'],
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig,
  }
}
