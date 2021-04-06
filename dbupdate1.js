const pool = require("./db");

const sql = 'UPDATE public.todo SET todo_desc = $1 WHERE todo_id = 3 RETURNING *';
const data = ['SITTING'];

pool.query(sql,data, (err, res) =>{
  if(err){
    console.log(err.stacks);
  } else {
      console.log(res.rows[0]);
  }
});
pool.end();