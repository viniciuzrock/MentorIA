import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../configs/database';

interface SessionAttributes {
    id: number;
    user_id: number;
    session_date: Date;
    notes: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface SessionCreationAttributes extends Optional<SessionAttributes, 'id'> { }

class Session extends Model<SessionAttributes, SessionCreationAttributes> implements SessionAttributes {
    public id!: number;
    public user_id!: number;
    public session_date!: Date;
    public notes!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Session.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        session_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: 'sessions',
    }
);

export default Session;
