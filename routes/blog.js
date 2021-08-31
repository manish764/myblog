const express = require("express");
const path = require("path");
const router = express.Router();
const blogs = require("../data/blogs");

router.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../templates/index.html"));
  res.render("../views/home");
});

router.get("/blog", (req, res) => {
  //   blogs.array.forEach((e) => {
  //     console.log(e.title);
  //   });

  //   res.sendFile(path.join(__dirname, "../views/blogHome.html"));
  res.render("blogHome");
});

router.get("/blogpost/:slug", (req, res) => {
  //console.log(req.params.slug);
  myblog = blogs.filter((e) => {
    return e.slug == req.params.slug;
  });
  // console.log(myblog);

  // res.sendFile(path.join(__dirname, "../templates/blogPage.html"));

  res.render("blogPage", {
    title: myblog[0].title,
    content: myblog[0].content,
  });
});

module.exports = router;
