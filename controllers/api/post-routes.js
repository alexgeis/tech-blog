const router = require("express").Router();
const { Post } = require("../../models/");
const withAuth = require("../../utils/auth");

// POST new post
// /api/post
router.post("/", withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newPost = await Post.create({ ...body, userId: req.session.userId });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE post by ID
// /api/post/:id
router.put("/:id", withAuth, async (req, res) => {
  try {
    const [updatePosts] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatePosts > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE post by ID
// /api/post/:id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const [killPosts] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (killPosts > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
