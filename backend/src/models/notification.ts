import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../configs/database';

interface NotificationAttributes {
    id: number;
    user_id: number;
    message: string;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface NotificationCreationAttributes extends Optional<NotificationAttributes, 'id'> { }

class Notification extends Model<NotificationAttributes, NotificationCreationAttributes> implements NotificationAttributes {
    public id!: number;
    public user_id!: number;
    public message!: string;
    public status!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Notification.init(
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
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'unread',
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
        tableName: 'notifications',
    }
);

export default Notification;
