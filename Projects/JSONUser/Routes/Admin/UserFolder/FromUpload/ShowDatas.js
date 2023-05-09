var express = require('express');
var router = express.Router();
let Controllers = require("../../../../controllers/Admin/UserFolder/FromUpload/Controllers.ShowDatas");

router.get('/', Controllers.ShowData)

module.exports = router;