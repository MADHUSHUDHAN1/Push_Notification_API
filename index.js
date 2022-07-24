const http = require('http');
//const { send } = require('process');
const app = require('./app');
const server = http.createServer(app);

// if("serviceWorker" in navigator)
// {
//     send().catch(err=> console(err));
// }


server.listen(3000,console.log("app is Runing"));