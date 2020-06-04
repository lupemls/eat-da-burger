const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get("/", (req,res) => {
    burger.selectAll(data => {
        res.render("index", {burgers: data});
    });
});

router.post("/api/burgs", (req,res) => {
    burger.insertOne(["burger_name"], [req.body.burger_name], data => {
        res.redirect('/');
    })
})

router.put('/burgers/:id', (req, res) => {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

module.exports = router;