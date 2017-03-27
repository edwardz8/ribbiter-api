'use strict'

class UserController {

  * index(request, response) {
   const users = yield User.all();
   response.JSON(users)
  }

  * store(request, response) {
   const { email, username, password } = request.only('email', 'username', 'password');

   const user = yield User.create({ email, username, password: yield Hash.make(password) });

   response.send(user);
  }

  * login(request, response) {
      const { username, password } = request.only('username', 'password');

      // SELECT * FROM users WHERE username = ? LIMIT 1
      const user = yield User.query().where({ username }).firstOrFail();

      const isValid = yield Hash.verify(password, user.password);

      if(!isValid) {
        return response.status(401).json({
          message: 'Invalid username/password'
        });
      }

      // Create a special password for the users
      const token = yield request.auth.generate(user);

      // Send the token to the user
      response.json({ token });
  }


  }

module.exports = UserController
