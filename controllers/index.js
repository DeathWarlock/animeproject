const awesomeFunction = (req, res, next) => {
    res.json('JoJos Bizarre Adventure');
};

const returnAninme = (req, res, next) => {
    res.json('Super Awesome Anime');
};

module.exports = {awesomeFunction, returnAnime};