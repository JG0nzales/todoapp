const pool = require("./db");

const query = 'SELECT * FROM public.todo';
pool
    .query(query)
    .then(res => {
      console.log(res.rows);
    })
    .catch(err => {
      console.log(err.message);
    })
    .finally(() => {
      pool.end();
    });
    




