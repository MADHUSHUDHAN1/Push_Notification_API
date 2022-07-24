const http = require('http');
//const { send } = require('process');
const port = process.env.PORT || 3000;
const app = require('./app');
const server = http.createServer(app);

// if("serviceWorker" in navigator)
// {
//     send().catch(err=> console(err));
// }


server.listen(port,console.log("app is Runing"));