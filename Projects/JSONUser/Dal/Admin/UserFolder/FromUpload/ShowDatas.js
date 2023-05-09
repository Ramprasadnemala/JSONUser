let CommonUserFuncs = require("../../../../../../DataSupply/Fs/Config/JSONUploadFolder/UserFolders/PullFolders/getDirectories");

let ShowData = async () => {
    let LocalReturnData = await CommonUserFuncs.StartFunc();

    if (LocalReturnData.KTF) {
        return await LocalReturnData.JsonData.data;
    }
};

module.exports = { ShowData };