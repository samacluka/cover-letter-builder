const express = require("express"),
      router  = express.Router({mergeParams: true});

const callbacks       = require("./callbacks.js");

// GET
router.post("/savet", callbacks.api.post.main);

module.exports = router;
