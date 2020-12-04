module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 8000,
    URL: process.env.BASE_URL || 'http://localhost:8000',
    MONGODB_URI: 
        process.env.MONGODB_URI || 
        'mongodb+srv://db_user123:gH0stlEv1athan!@edpossible.bheht.mongodb.net/EdPossible?retryWrites=true&w=majority'
}