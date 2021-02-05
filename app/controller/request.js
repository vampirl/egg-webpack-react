'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
  async api() {
    const { action } = this.ctx.params;
    let result
    switch(action) {
      case 'login': {
        result = await this.app.mysql.select('user');
        break;
      }
      case 'logout': {
        result = await this.app.mysql.select('user');
        break;
      }
      default: {
        result = await this.app.mysql.select('user');
        break;
      }
    }
    console.log("result====", result)
    const res = {
      content: result.data,
      code: result.status === 200 ? 1 : 7
    }
    this.ctx.body = res;
  }
}

module.exports = RegisterController;
