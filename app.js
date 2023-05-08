let CommonProjectNameForJSONUser = "JSONUser";

const express = require('express');
const http = require('http');
const app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || '4116');

let SubRouteJSONUser = require(`./Projects/${CommonProjectNameForJSONUser}/Routes`);

app.use(cookieParser());
app.use(express.json({ limit: '100mb' }));

app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname + `/Html/JSONProject.html`));
});

app.use(`/${CommonProjectNameForJSONUser}`, SubRouteJSONUser);

//app.use("/JSONApi", cors({ origin: '*' }), SubRouteJSONProject);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, () => {
    console.log(`Listening in port : ${port}`);
    console.log(`Click to open : http://localhost:${port}`);
});