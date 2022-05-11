import { sequelize } from './db';
import { User } from './models';
import { users } from './seedData';

async function seed() {
  try {
    await sequelize.sync({ force: true });
    await Promise.all(users.map((user) => User.create(user)));

    console.log('DB populated!');
  } catch (error) {
    console.error(error);
  }
}

seed();
