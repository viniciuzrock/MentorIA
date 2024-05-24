import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user';
import sequelize from './configs/database';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

sequelize.sync().then(() => {
    console.log('Database connected and synchronized');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});

export default app;
