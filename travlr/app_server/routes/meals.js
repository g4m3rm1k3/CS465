var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('meals', {title: "Travlr Getaways"});
});

module.exports = router;