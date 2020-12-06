module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database: 'getpet',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    },
}