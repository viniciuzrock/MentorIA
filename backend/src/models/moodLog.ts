import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../configs/database';

interface MoodLogAttributes {
    id: number;
    user_id: number;
    mood: string;
    log_date: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

interface MoodLogCreationAttributes extends Optional<MoodLogAttributes, 'id'> { }

class MoodLog extends Model<MoodLogAttributes, MoodLogCreationAttributes> implements MoodLogAttributes {
    public id!: number;
    public user_id!: number;
    public mood!: string;
    public log_date!: Date;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

MoodLog.init(
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
        mood: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        log_date: {
            type: DataTypes.DATE,
            allowNull: false,
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
        tableName: 'mood_logs',
    }
);

export default MoodLog;
