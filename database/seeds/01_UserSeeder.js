const User = use('App/Models/User');

class UserSeeder {
  async run() {
    await User.query().delete();

    const users = [
      { username: 'admin', email: 'admin@example.com', password: 'password', is_admin: 1 },
      { username: 'johndoe', email: 'johndoe@example.com', password: 'password1' }
    ];

    await User.createMany(users);
  }
}

module.exports = UserSeeder;
