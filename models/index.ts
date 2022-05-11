import Sequelize from 'sequelize';
import { sequelize } from '../db';

const User = sequelize.define('users', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
});

export { sequelize as db, User };
