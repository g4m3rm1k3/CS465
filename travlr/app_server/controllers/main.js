/* GET Homepage */
const index = (req, res) => {
    res.render('index', {titele: "Travlr Getaways"});
}

module.exports = {
    index
}