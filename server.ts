import { Server } from './app/app';

var server =  new Server();

server.start(4000);


// const app = express();

// app.get('/', (req, res) => {

//     res.end('Will See !!!!');
// })

// app.listen(3000, () => {
//     console.log('server is listening on 3000 port. please run http://localhost:3000');
// })