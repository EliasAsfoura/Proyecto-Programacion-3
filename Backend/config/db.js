import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql2/promise';

// Conexion a la base de datos

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default db;