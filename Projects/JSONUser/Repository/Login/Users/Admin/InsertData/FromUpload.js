let Dal = require("../../../../../Dal/Login/Users/Admin/InsertData/FromUpload");

let Upload = ({ inDataPK }) => {
    
    Dal.Upload({ inDataPK })

};

module.exports = { Upload };