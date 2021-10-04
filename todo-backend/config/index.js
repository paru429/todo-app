module.exports = {
    monogoDbUsername: process.env.MONGO_USERNAME || 'root',
    mongoDbPassword: process.env.MONGO_PASSWORD || 'password',
    mongoDbHost: process.env.MONGO_HOST || 'localhost',
}