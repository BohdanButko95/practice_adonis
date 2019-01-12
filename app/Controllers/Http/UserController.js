const User = use('App/Models/User');

class UserController {
  async login({ request, auth }) {
    const { email, password } = request.post();
    return auth.attempt(email, password);
  }

  async signup({ request, response }) {
    const { username, email, password } = request.post();
    const user = new User();
    user.username = username;
    user.email = email;
    user.password = password;
    await user.save();

    return response.json({ msg: 'OK' });
  }
}

module.exports = UserController;
