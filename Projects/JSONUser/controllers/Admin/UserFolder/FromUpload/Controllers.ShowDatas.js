let Repo = require("../../../../Repository/Admin/UserFolder/FromUpload/ShowDatas");

let ShowData = (req, res) => {

    let LocalFromRepo = Repo.ShowData()

    res.json(LocalFromRepo);

};

module.exports = { ShowData };