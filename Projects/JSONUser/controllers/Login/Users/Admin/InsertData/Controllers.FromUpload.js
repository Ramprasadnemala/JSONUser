let Repo = require("../../../../../Repository/Login/Users/Admin/InsertData/FromUpload");

let Upload = (req, res) => {
    let LocalDataPk = req.params.inJsonPk;

    let LocalFromRepo = Repo.Upload({
        inDataPK: LocalDataPk
    });

    res.json(LocalFromRepo);
};

module.exports = { Upload };