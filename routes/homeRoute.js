const express = require('express');
const route = express.Router();
const homeController = require('../controller/HomeController');


route.get("/home", homeController.get)
route.get("/home/:homeId", homeController.getbyHomeId)


module.exports = route;