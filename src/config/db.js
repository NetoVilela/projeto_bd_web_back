const bd_name = process.env.BD_NAME;
const bd_user = process.env.BD_USER;
const bd_password = process.env.BD_PASSWORD;
const bd_port = process.env.BD_PORT;
const bd_server = process.env.BD_SERVER;

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: `postgres://${bd_user}:${bd_password}@${bd_server}:${bd_port}/${bd_name}`
});

pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
  };

// async function connect() {
//     if (global.connection)
//         return global.connection.connect();


//     const pool = new Pool({
//         connectionString: `postgres://${bd_user}:${bd_password}@${bd_server}:${bd_port}/${bd_name}`
//     });

//     //apenas testando a conexão
//     const client = await pool.connect();
//     console.log("Criou pool de conexões no PostgreSQL!");

//     const res = await client.query('SELECT NOW()');
//     console.log(res.rows[0]);
//     client.release();

//     //guardando para usar sempre o mesmo
//     global.connection = pool;
//     return pool.connect();
// }

// module.exports = {
//     query: (text, params) => pool.query(text, params),
// };

// connect() 