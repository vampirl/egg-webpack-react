'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/register', controller.register.index);
  router.get('/**', controller.home.index);
};
