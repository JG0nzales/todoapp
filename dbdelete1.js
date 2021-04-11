const pool = require("./db");

const sql = 'DELETE FROM public.todo WHERE todo_id = $1 RETURNING *';
const data = [6];

pool.query(sql,data, (err, res) =>{
  if(err){
    console.log(err.stacks);
  } else {
      console.log(res.rows[0]);
  }
});
pool.end();