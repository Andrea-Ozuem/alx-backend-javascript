import express from 'express';
import router from './router/index';

app = express();
const port = 1245;
app.use('/', router);

app.listen(port, ()=>{
  console.log('app is listening on port 3000');
});

export default app;
