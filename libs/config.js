module.exports = {
    database:"ntask",
    username:"root",
    password:"root",
    params:{
        dialect : "mysql",
        host:"localhost",
        port:"3306",
        pool:{
            max:5,
            min:0,
            idle:10000
        },
        define:{
            underscored:true
        }
    }
}