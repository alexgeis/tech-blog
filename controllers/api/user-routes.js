const router = require("express").Router();
const { User } = require("../../models");

// /api/user
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// /api/user/login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    //if user record in User table does not match the request body username
    if (!user) {
      res.status(400).json({ message: "Account login unsuccessful!" });
      return;
    }
    //if password record in User table does not match the request body password
    const validPassword = user.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Account login unsuccessful!" });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: "Login successful!" });
    });
  } catch (err) {
    res.status(400).json({ message: "No user account exists!" });
  }
});

// /api/user/logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
