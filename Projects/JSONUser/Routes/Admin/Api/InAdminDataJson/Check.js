var express = require('express');
var router = express.Router();

let Repo = require("../../../../Repository/Admin/Api/InAdminDataJson/Check");
let Controller = require("../../../../controllers/Admin/Api/InAdminDataJson/check.controller");

let CommonjwtFunc = require("../../../../../../common/Jwt/ForAdminDataJson");

router.post('/LoginCheck', (req, res, next) => {
    let LocalUserName = req.body.inUserName;
    let LocalPassWord = req.body.inPassword;

    Repo.ForUserAndPassword({
        inUserName: LocalUserName,
        inPassWord: LocalPassWord
    }).then(PromiseDataFromUserCheck => {
        if (PromiseDataFromUserCheck.KTF) {
            if (PromiseDataFromUserCheck.kPK > 0) {
                CommonjwtFunc.CreateToken({
                    inUserName: LocalUserName,
                    inDataPk: PromiseDataFromUserCheck.kPK
                }).then((PromiseDataFromJwt) => {
                    res.cookie(PromiseDataFromJwt.CookieName, PromiseDataFromJwt.KToken, { maxAge: 900000, httpOnly: false });

                    res.json(PromiseDataFromUserCheck);
                });
            } else {
                res.json(PromiseDataFromUserCheck);
            };
        } else {
            res.json(PromiseDataFromUserCheck);
        };
    });
});


router.post('/LoginCheck1', Controller.LoginCheck1);
router.post('/TokenToCookie', Controller.TokenToCookie);
router.post('/TokenReturnOnly', Controller.TokenReturnOnly);

module.exports = router;