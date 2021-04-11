const pool = require("./db");

const sql = 'INSERT INTO public.todo(todo_desc) VALUES ($1) RETURNING *';
const data = ['white'];

pool.query(sql,data, (err, res) =>{
  if(err){
    console.log(err.stacks);
  } else {
      console.log(res.rows[0]);
  }
});
pool.end();