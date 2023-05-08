let Datasupply = require("../../../../../..");

let Upload = ({ inDataPK }) => {
    if (inDataPK > 0) {
        Datasupply.Upload({ inDataPK })

    };
};

module.exports = { Upload };