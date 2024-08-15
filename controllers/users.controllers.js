import pool from '../index.js';

class usersController{
    async  getAllUsers(req, res){
        try {
            const result = await pool.query('SELECT * FROM users ORDER BY id ASC, type ASC');
            const rows = result.rows;
            return res.json(rows);
          } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al obtener los usuarios', details: err.message });
          }
    }

    async  getAllAdmin(req, res){
        try {
            const result = await pool.query('SELECT * FROM users WHERE type = 1');
            const rows = result.rows;
            return res.json(rows);
          } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al obtener los admins', details: err.message });
          }
    }


    async ping(req, res) {
        try {
          const result = await pool.query('SELECT NOW()');
          return res.json(result.rows[0]);
        } catch (err) {
          console.error(err);
          return res.status(500).json({ error: 'Error al hacer ping', details: err.message });
        }
      }
}

export default new usersController();
