var express = require('express');
var router = express.Router();
let SubRouteAdmin = require('./Routes/Admin');
let CommonValidate = require('./Routes/Validate');
let CommonLogin = require('./Routes/Login');

//let CommonMiddlewareJwtVerify = require("../../common/Jwt/ForAdminDataJson");
let CommonMiddlewareJwtVerify = require("../../common/Jwt/ForUserManagement");

router.use('/Users', CommonMiddlewareJwtVerify.ForKeshavSoftRedirectToLogin, require('./Routes/Users'));
router.use('/Admin', SubRouteAdmin);
router.use('/Validate', CommonValidate);
router.use('/Login', CommonLogin);

module.exports = router;