'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await this.app.mysql.insert('user', { username: '江边', age: 17, sex: '男' });
    ctx.body = result;
  }
}

module.exports = RegisterController;
