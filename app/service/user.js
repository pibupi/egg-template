'use strict'

const Service = require('egg').Service
class UserService extends Service {
  async detail(id) {
    return {
      id,
      name: 'john',
      age: 29,
    }
  }
}
module.exports = UserService
