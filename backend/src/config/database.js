const knex = require('knex')
module.exports =  knex({
    client:"mssql",
    connection:{
        database:process.env.DB_DATABASE,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        server:process.env.DB_HOST
    },
    pool:{
        min:0,
        max:7
    },
    debug:true,
});