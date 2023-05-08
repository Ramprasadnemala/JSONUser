let Datasupply = require("../../../../../../../DataSupply/Fs/Config/JSONFolder/UserFolders/InsertFolder/FromUpload");

let Upload = ({ inDataPK }) => {
    if (inDataPK > 0) {
        Datasupply.Upload({ inDataPK })

    };
};

module.exports = { Upload };