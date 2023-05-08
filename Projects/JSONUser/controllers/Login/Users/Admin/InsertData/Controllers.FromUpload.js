let Repo = require("../../../../../Repository/Login/Users/Admin/InsertData/FromUpload");

let Upload = (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    Repo.Upload({
        inDataPK: LocalDataPk

    }).then((PromieData) => {
        res.end(JSON.stringify(PromieData));
    });
};

module.exports = { Upload };