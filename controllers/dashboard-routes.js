const router = require("express").Router();
const { Post } = require("../models/");
const withAuth = require("../utils/auth");

// /dashboard
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    //serialize the incoming data via map array method
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("all-posts-admin", {
      layout: "dashboard",
      posts,
    });
  } catch (err) {
    res.redirect("login");
  }
});

// /dashboard/new
router.get("/new", withAuth, (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
  });
});

// /dashboard/edit/:id
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render("edit-post", {
        layout: "dashboard",
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
