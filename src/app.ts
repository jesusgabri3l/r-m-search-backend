import  dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config({
  path: '.env'
});

class Server {
  public app = express();
}
const server = new Server();
server.app.use(cors());
server.app.use(express.json());


//ROUTES//
import characterRouter from './modules/characters/routes/characterRouter';
server.app.use('/api', characterRouter);


((port = process.env.PORT || 5000) => {
  server.app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
})();

export {server};