var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('contact', {title: "Travlr Getaways"});
});

module.exports = router;