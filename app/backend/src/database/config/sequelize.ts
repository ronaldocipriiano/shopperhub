import { Sequelize } from 'sequelize';
import config from './config';

const db = new Sequelize(config);

export default db;
