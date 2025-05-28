import dotenv from 'dotenv';

dotenv.config()

export default {
    DATABASE_NAME: process.env.DATABASE_NAME || "world",
    DATABASE_USER: process.env.DATABASE_USER || "root",
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || "123456",
    DATABASE_HOST: process.env.DATABASE_HOST || "localhost",
    PORT: process.env.PORT || 3000
}
