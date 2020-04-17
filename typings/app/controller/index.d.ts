// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportRegister = require('../../../app/controller/register');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    register: ExportRegister;
  }
}
