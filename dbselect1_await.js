const pool = require("./db");

const query = 'SELECT * FROM public.todo';

async function doExec() {
  try {
    const res = await pool.query(query)
    console.log(res.rows)

    
  } catch (err) {
    console.log(err.message)
  }
  finally{
    pool.end();
  }
}

doExec();

