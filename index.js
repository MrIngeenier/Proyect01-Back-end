import express from 'express'
import {config} from 'dotenv'
import pg from 'pg'

config()
const app = express()
const pool = new pg.Pool({
 connectionString: process.env.DATABASE_URL,
 ssl: true
});

app.listen(3000);

app.get('/',(req,res)=>{
    res.send('Hola Mundo - 2024 PECAS ROSILLA -/');
});

app.get('/ping',async(req,res)=>{
   const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
});

app.get('/users',async(req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM users ORDER BY id ASC, type ASC ');
        const rows = result.rows;
        return res.json(rows);
    }catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error al obtener los usuarios' });
      }
 });
 
console.log('Server on port',3000)