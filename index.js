import express from 'express';
import { config } from 'dotenv';
import pg from 'pg';
import userRoute from './routes/users.routes.js';

config();
const app = express();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Asegúrate de que esta configuración sea la adecuada
});

const PORT = process.env.PORT || 10000;

app.use('/users', userRoute);
//app.use(userRoute);


app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('SERVER ON');
});


//console.log('Servidor en el puerto :', PORT);
export default pool;
