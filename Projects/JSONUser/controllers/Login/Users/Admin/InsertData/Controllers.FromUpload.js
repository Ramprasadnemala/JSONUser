let Repo = require("../../../../../Repository/Login/Users/Admin/InsertData/FromUpload");

let Upload = (req, res) => {

    // let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalDataPk = req.params.inJsonPk;
    console.log("kkkkkkkk", req.params, LocalDataPk);
    let LocalFromRepo = Repo.Upload({
        inDataPK: LocalDataPk
    });
    console.log("LocalFromRepo", LocalFromRepo);
    // .then((PromieData) => {
    //     res.end(JSON.stringify(PromieData));
    // });
};

module.exports = { Upload };